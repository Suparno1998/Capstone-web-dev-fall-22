const express = require("express");
const logger = require("../utils/logger");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/User");
const bcrypt = require("bcrypt");
const { UserProfileModel } = require("../models/UserProfile");
require("../utils/auth");
const authHandler = express.Router();
const JWTstrategy = require("passport-jwt").Strategy;
const {
  sendForgetPasswordEmail,
  sendVerificationEmail,
} = require("../utils/utils");
let password_forget_users = [];
var cookieExtractor = function (req) {
  try {
    let cookies = null;
    if (req && req.headers) cookies = req.headers.cookie;
    cookies = cookies.split(";");
    token = cookies.filter((v) => v.includes("token="));
    let jwt = token[0].replace("token=", "");
    console.log(token[0], jwt);
    return jwt;
  } catch (err) {
    console.log(err);
    return null;
  }
};

passport.use(
  new JWTstrategy(
    {
      secretOrKey: "test_data",
      jwtFromRequest: cookieExtractor,
      passReqToCallback: true,
    },
    async (req, token, done) => {
      try {
        //console.log(token)
        return done(null, token.user);
      } catch (error) {
        console.log(error);
        done(error);
      }
    }
  )
);

authHandler.get("/verify", async (req, res) => {
  console.log(req.query.email);
  console.log(req.query.token);
  const user = await UserModel.findOne({
    verificationToken: req.query.token,
    email: req.query.email,
  });
  console.log(user);
  if (user) {
    console.log("verified");
    await UserModel.updateOne({ _id: user._id }, { isConfirmed: true });
    const userProfile = await UserProfileModel.create({
      user_id: user._id,
      firstname: "",
      lastname: "",
      contactno: "",
    });
    res.redirect("/?message=verified");
  } else {
    console.log("error");
    res.redirect("/");
  }
});
authHandler.post("/reset", async (req, res) => {
  try {
    const token = req.body.token;
    const password = req.body.password;
    const email = req.body.email;
    if (!token || !email || !password) {
      res.send({ status: false, error: "Invalid Request" });
      return;
    }
    console.log(token, password, email);
    let check =
      password_forget_users.filter((v) => v[email] === token).length == 1;
    if (!check) {
      res.send({
        status: false,
        error: "Did not receive password reset request from this account",
      });
    } else {
      let newHashedPassword = await bcrypt.hash(password, 10);
      await UserModel.updateOne(
        { email: email },
        { password: bcrypt.hash(newHashedPassword, 10) }
      );
    }
    res.send({ status: true, message: "Passowrd reset successfully" });
  } catch (err) {
    console.log(err);
    res.json({
      status: false,
      error: err,
    });
  }
});
authHandler.post("/resend", async (req, res) => {
  try {
    const body = req.body;
    const userEmail = body.email;
    console.log(userEmail);
    const userList = await UserModel.find({ email: userEmail });
    console.log(userList);
    if (userList.length == 1) {
      const user = userList[0];
      if (user.isConfirmed) {
        res.json({ status: false, error: "User already verified" });
        return;
      } else {
        let response = await sendVerificationEmail(
          user.email,
          user.verificationToken
        );
        console.log(response);
        res.json({
          status: true,
          message: "Verification Email has been resent.",
        });
      }
    } else {
      res.send({ status: false, error: "User not found" });
      return;
    }
  } catch (err) {
    console.log(err);
    res.json({ status: false, error: err });
  }
});
authHandler.post("/forget", async (req, res) => {
  try {
    const body = req.body;
    const userEmail = body.email;
    console.log(userEmail);
    const userList = await UserModel.find({ email: userEmail });
    console.log(userList);
    if (userList.length == 1) {
      let token = await sendForgetPasswordEmail(userEmail);
      console.log(token);
      password_forget_users.push({ [userList[0].email]: token });
      res.send({
        status: true,
        message:
          "We have sent an email to your email. Please follow instructions there to reset password",
      });
    } else {
      res.send({ status: false, error: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.json({
      status: false,
      error: err,
    });
  }
});

authHandler.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req, res, next) => {
    try {
      res.json({ status: true, message: "Signup successful" });
    } catch (error) {
      res.json({ status: false, error: error });
    }
  }
);

authHandler.post("/login", async (req, res, next) => {
  logger.info(JSON.stringify(req.body));
  passport.authenticate("login", async (err, user, info) => {
    try {
      //console.log(err,user,info)
      if (err || !user) {
        console.log("control was here");
        res.json({
          status: false,
          error: info.message,
        });
      } else {
        req.login(user, { session: false }, async (error) => {
          if (error) res.json({ status: false, error: error });

          const body = { _id: user._id, email: user.email, role: user.role };
          const token = jwt.sign({ user: body }, "test_data", {
            expiresIn: 3600,
          });

          return res
            .cookie("token", token, {
              httpOnly: true,
              secure: true,
            })
            .send({ status: true, data: body });
        });
      }
    } catch (error) {
      res.json({ status: false, error: error });
    }
  })(req, res, next);
});

module.exports = { authHandler };
