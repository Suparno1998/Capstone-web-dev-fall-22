const passport = require('passport');
const logger = require('./logger')
const localStrategy = require('passport-local').Strategy;
const { UserModel } = require('../models/User');


passport.use(
    'signup',
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          const user = await UserModel.create({ email, password });
          logger.info("New User : ",user)
          return done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
);

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
          logger.info(`Login successfull for ${email}`)
          return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
          return done(error);
        }
      }
    )
);