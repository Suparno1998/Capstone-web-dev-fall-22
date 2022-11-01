const express = require('express')
const logger = require('../utils/logger')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { UserModel } = require('../models/User')

require('../utils/auth')
const authHandler = express.Router()
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

var cookieExtractor = function(req) {
  try{
    let cookies = null;
    if (req && req.headers) cookies = req.headers.cookie;
    cookies = cookies.split(";")
    token = cookies.filter(v => v.includes("token="))
    let jwt = token[0].replace("token=","")
    console.log(token[0],jwt)
    return jwt;
  }
  catch(err)
  {
    console.log(err)
    return null
  }
};


passport.use(
    new JWTstrategy(
      {
        secretOrKey: 'test_data',
        jwtFromRequest: cookieExtractor,
        passReqToCallback : true
      },
      async (req, token, done) => {
        try {
          //console.log(token)
          return done(null, token.user);
        } catch (error) {
          console.log(error)
          done(error);
        }
      }
    )
);

authHandler.get('/verify',async (req,res)=>{
  console.log(req.query.email)
  console.log(req.query.token)
  const user = await UserModel.findOne({verificationToken : req.query.token, email : req.query.email})
  console.log(user)
  if(user){
    console.log("verified")
    await UserModel.updateOne({_id : user._id},{isConfirmed : true})
    res.redirect("/?message=verified")
  }
  else{
    console.log('error')
    res.redirect('/')
  }
})
authHandler.post('/signup',
    passport.authenticate('signup', { session: false }),async (req, res, next) => {
      try{
        res.json({status : true, message: 'Signup successful',});
      }catch(error){
        res.json({status : false, error : error})
      }
})


authHandler.post('/login', async (req, res, next) => {
      logger.info(JSON.stringify(req.body))
      passport.authenticate('login', async (err, user, info) => {
          try {
            //console.log(err,user,info)
            if (err || !user) {
              console.log('control was here')
              res.json({
                status : false,
                error : info.message
              })
            }
            else{
              req.login(user,{ session: false },
                async (error) => {
                  if (error) res.json({status : false, error : error});
    
                  const body = { _id: user._id, email: user.email, role: user.role };
                  const token = jwt.sign({ user: body }, 'test_data',{
                    expiresIn : 3600
                  });
    
                  return res.cookie("token",token,{
                    httpOnly : true,
                    secure: true,
                  }).send({status : true, data : body})
                }
              );
            }
          } catch (error) {
            res.json({status : false, error : error})
          }
        }
      )(req, res, next);
    }
);

module.exports = { authHandler }