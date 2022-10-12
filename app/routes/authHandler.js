const express = require('express')
const logger = require('../utils/logger')
const passport = require('passport')
const jwt = require('jsonwebtoken')
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
authHandler.post('/signup',
    passport.authenticate('signup', { session: false }),
        async (req, res, next) => {
            res.json({
            message: 'Signup successful',
        });
})


authHandler.post(
    '/login',
    async (req, res, next) => {
      logger.info(JSON.stringify(req.body))
      passport.authenticate(
        'login',
        async (err, user, info) => {
          try {
            if (err || !user) {
              const error = new Error('An error occurred.');
  
              return next(error);
            }
  
            req.login(
              user,
              { session: false },
              async (error) => {
                if (error) return next(error);
  
                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, 'test_data',{
                  expiresIn : 3600
                });
  
                return res.json({ token });
              }
            );
          } catch (error) {
            return next(error);
          }
        }
      )(req, res, next);
    }
);

module.exports = { authHandler }