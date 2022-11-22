const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const logger = require("../utils/logger");
const { SubscriberModel } = require("../models/Subscriber");
const { UserProfileModel } = require("../models/UserProfile");
const { User } = require("../models/User");
const { MessageModel } = require("../models/Message");
const { sendEmail } = require("../utils/utils");

router.post("/newsletter", async (req, res) => {
  try {
    var subscriber = new SubscriberModel(req.body);
    await subscriber.save();
    let status = await sendEmail(
      req.body.email,
      "Thanks for subscribing",
      "<p>You are receiving this email because you are signed up to receive promotional communications. This message was sent by the Food Lab.</p> <strong>Thank you for subscribing to our newsletter</strong>",
      true,
      "Newsletter <news@themadcooks.me>"
    );
    logger.info(JSON.stringify(status));
    res.json({ status: true });
  } catch (e) {
    logger.error(e);
    res.json({ status: false, error: e });
  }
});

router.post("/profile", async (req, res) => {
  try {
    var data = req.body;
    console.log(data);
    var { user_id, ...data } = data;
    console.log(user_id, data);
    await UserProfileModel.updateOne({ user_id: user_id }, { ...data });
    res.json({ status: true });
  } catch (e) {
    console.log(e);
    res.json({ status: false, error: e });
  }
});

router.get("/profile-data", async (req, res) => {
  try {
    const id = req.query.id;
    console.log(id);
    const profiledata = await UserProfileModel.findOne({ user_id: id });
    console.log(profiledata);
    //await userprofile.save()
    res.json({ status: true, data: profiledata });
  } catch (e) {
    console.log("@@@@@@@@@@@@@@@@@");
    console.log(e);
    res.json({ status: false, error: e });
  }
});

router.post("/contact", async (req, res) => {
  try {
    const contacObject = req.body;
    console.log(contacObject);
    await MessageModel.create(contacObject);
    res.json({ status: true, message: "Message was stored successfully" });
  } catch (err) {
    console.log(err);
    res.json({ status: false, error: err });
  }
});

module.exports = { router };
