const express = require("express");
const adminRouter = express.Router();
const { MessageModel } = require("../models/Message");
<<<<<<< HEAD
const {UserModel} = require("../models/User")
=======
const { UserModel } = require("../models/User");
>>>>>>> 509449db557b552661536ee03d2e9cdeb86b3061

adminRouter.get("/messages", (req, res) => {
  MessageModel.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("This is error", err);
    } else {
      res.status(200).send(data);
      console.log("This is data", data);
    }
  });
});

adminRouter.get("/orders", (req, res) => {
  UserModel.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("This is error", err);
    } else {
      res.status(200).send(data);
      console.log("This is data", data);
    }
  });
adminRouter.get("/users-list", async (req, res) => {
  try {
    console.log("$$$$$$$$$$$$$$")
    const userList = await UserModel.find();
    console.log(userList);
    //await userprofile.save()
    res.json({ status: true, data: userList });
  } catch (e) {
    console.log("@@@@@@@@@@@@@@@@@");
    console.log(e);
    res.json({ status: false, error: e });
  }
});

module.exports =  {adminRouter} 
