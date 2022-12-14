const express = require("express");
const mongoose = require("mongoose");
const {sendSuccessEmail} = require('../utils/utils')
const { SubscriptionModel } = require("../models/Subscription");
const { UserProfileModel } = require("../models/UserProfile");
const { MealPlanModel } = require("../models/Mealplan");
const { MessageModel } = require("../models/Message");
const { UserModel } = require("../models/User");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const logger = require("../utils/logger")("/routes/secureRoutes.js");
const secureRouter = express.Router();

secureRouter.post("/profile", async (req, res) => {
  try {
    var data = req.body;
    let doc = await UserProfileModel.findOneAndUpdate(
      { user_id: req.user.user_id },
      { ...data },
      {
        new: true,
      }
    );
    logger.info(JSON.stringify(doc));
    res.json({ status: true, data: doc });
  } catch (e) {
    logger.error(e);
    res.json({ status: false, error: e });
  }
});

secureRouter.get("/profile-data", async (req, res) => {
  try {
    logger.info(req.isExpired);
    const profiledata = await UserProfileModel.findOne({
      user_id: req.user.user_id,
    });
    logger.info(profiledata);
    //await userprofile.save()
    res.json({ status: true, data: profiledata });
  } catch (e) {
    logger.error(e);
    res.json({ status: false, error: e });
  }
});

secureRouter.post("/subscribe", async (req, res) => {
  try {
    let items = req.body
    items.forEach(async v => {
      const startDate = new Date(v.startDate);
      const end_date = new Date(
        startDate.setMonth(
          startDate.getMonth() + parseInt(v.duration.replace("m", ""))
        )
      );
      const startFinal = new Date(v.startDate);
      //console.log(startFinal, endDate)
      const subscribeObj = { ...v, end_date };
      console.log(subscribeObj);
      await SubscriptionModel.create(subscribeObj);
    })
    res.json({ status: true });
  } catch (err) {
    logger.error(err);
    res.json({ status: false, error: err });
  }
});

secureRouter.get("/get/plans", async (req, res) => {
  try {
    logger.info("test");
    const user = req.user;
    logger.info(user.user_id);
    let subscribedMealPlans = await SubscriptionModel.aggregate([
      {
        $lookup: {
          from: "mealplans",
          foreignField: "_id",
          localField: "meal_plan_id",
          as: "meal_plan",
        },
      },
      {
        $unwind: "$meal_plan",
      },
      {
        $match: { user_id: mongoose.Types.ObjectId(user.user_id) },
      },
    ]);
    logger.info(JSON.stringify(subscribedMealPlans));
    //logger.info(JSON.stringify(subscribedMealPlans))
    res.json({ status: true, data: subscribedMealPlans });
  } catch (err) {
    logger.error(err);
    res.json({ status: false, error: err });
  }
});

secureRouter.post("/cart/addtocart", async (req, res) => {
  const cart = new Cart({
    user: req.user._id,
    cartItems: req.body.cartItems,
  });

  cart.save((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      return res.status(201).json({ cart });
    }
  });
});
secureRouter.post("/createorder", async (req,res)=>{
  try{
    const data = req.body
    console.log(data)
    const storedObj = await Order.create(data)
    logger.info(storedObj._doc._id)
    await sendSuccessEmail(data)
    res.send({status : true, id : storedObj._doc._id})
  }catch(err){
    logger.error(JSON.stringify(err))
    res.send({status : false, error : JSON.stringify(err)})
  }
})
module.exports = { secureRouter };
