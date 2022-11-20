const express = require("express");
const adminRouter = express.Router();
const { MessageModel } = require("../models/Message");

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

module.exports = { adminRouter };
