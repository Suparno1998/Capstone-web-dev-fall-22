const express = require("express");
const adminRouter = express.Router();
const { MessageModel } = require("../models/Message");
const { UserModel } = require("../models/User");

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

adminRouter.delete("/message/delete/:id", (req, res) => {
  MessageModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

adminRouter.get("/users-list", (req, res) => {
  UserModel.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("This is error", err);
    } else {
      res.status(200).send(data);
      console.log("Users data", data);
    }
  });
});

adminRouter.get("/update-user-status", (req, res) => {
  console.log("&&&&&&&&&&");
  const id = req.query.id;
  const status = req.query.status;
  var updated = false;
  console.log("ID " + id + " status " + status);

  if (id && status) {
    if (status == 1) {
      UserModel.findOneAndUpdate(
        { _id: id },
        { $set: { status: 0 } },
        function (error, doc) {
          if (error) {
            throw error;
          } else {
            updated = true;
            console.log("updated to 0");

            UserModel.find({}, (err, data) => {
              if (err) {
                res.status(500).send(err);
                console.log("This is error", err);
              } else {
                res.status(200).send(data);
                console.log("Users data------------", data);
              }
            });
          }
        }
      );
    } else if (status == 0) {
      UserModel.findOneAndUpdate(
        { _id: id },
        { $set: { status: 1 } },
        function (error, doc) {
          if (error) {
            throw error;
          } else {
            updated = true;
            console.log("updated to 1");
            UserModel.find({}, (err, data) => {
              if (err) {
                res.status(500).send(err);
                console.log("This is error", err);
              } else {
                res.status(200).send(data);
                console.log("Users data------------", data);
              }
            });
          }
        }
      );
    }
  }
});

module.exports = { adminRouter };
