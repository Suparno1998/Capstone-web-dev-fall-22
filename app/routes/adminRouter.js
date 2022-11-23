const express = require("express");
const adminRouter = express.Router();
const { MessageModel } = require("../models/Message");

adminRouter.get("/messages/get", (req, res) => {
  MessageModel.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = { adminRouter };
