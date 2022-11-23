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


//CREATE

adminRouter.post("/", isAdmin, async (req, res) => {
  const { name, desc, price, image } = req.body;

  try {
    if (image) {
      const uploadedResponse = await cloudinary.uploader.upload(image, {
        upload_preset: "Meal Plan",
      });

      if (uploadedResponse) {
        const meal = new mealPlan({
          name,
          desc,
          price,
          image: uploadedResponse,
        });

        const savedmealPlan = await meal.save();
        res.status(200).send(savedmealPlan);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//DELETE

adminRouter.delete("/:id", isAdmin, async (req, res) => {
  try {
    await mealPlan.findByIdAndDelete(req.params.id);
    res.status(200).send("MealPlan has been deleted...");
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET ALL mealPlanS

adminRouter.get("/", async (req, res) => {
  const mealplan = req.query.brand;
  try {
    let meals;

    if (mealplan) {
      meals = await mealPlan.find({
        title: mealplan,
      });
    } else {
      meals = await mealPlan.find();
    }

    res.status(200).send(meals);
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET mealPlan

adminRouter.get("/find/:id", async (req, res) => {
  try {
    const meal = await mealPlan.findById(req.params.id);
    res.status(200).send(meal);
  } catch (error) {
    res.status(500).send(error);
  }
});

//UPDATE

adminRouter.put("/:id", isAdmin, async (req, res) => {
  try {
    const updatedmealPlan = await mealPlan.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedmealPlan);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = { adminRouter };
