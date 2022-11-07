const passport = require('passport');
const logger = require('./logger')
const localStrategy = require('passport-local').Strategy;
const {sendVerificationEmail} = require('./utils')
const { UserModel } = require('../models/User');
const sha1 = require('sha1');
const { UserProfileModel } = require('../models/UserProfile');


passport.use(
    'signup',
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          console.log(email)
          let emailToken = sha1(email+password)
          const user = await UserModel.create({ email, password, isConfirmed : false, verificationToken : emailToken});
          await sendVerificationEmail(email,emailToken)
          //logger.info("New User : ",user)
          return done(null, user);
        } catch (error) {
          console.log(error)
          done(error);
        }
      })
)


passport.use(
    'login',
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          const user = await UserModel.findOne({ email });
          
          if (!user) {
            logger.info(`No account found for for ${email}`)
            return done(null, false, { message: 'User not found' });
          }
  
          const validate = await user.isValidPassword(password);
  
          if (!validate) {
            logger.info(`Wrong password for ${email}`)
            return done(null, false, { message: 'Wrong Password' });
          }
          if(!user.isConfirmed){
            logger.info(`Account not verified for ${email}`)
            return done(null, false, {message : "Account not verified"})
          }
          logger.info(`Login successfull for ${email}`)
          return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
          return done(error);
        }
    })
  )
