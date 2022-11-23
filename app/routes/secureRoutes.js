const express = require("express");
const { SubscriptionModel } = require("../models/Subscription");
const { UserProfileModel } = require("../models/UserProfile");
const { MealPlanModel } = require("../models/Mealplan");
const { MessageModel } = require("../models/Message");
const { UserModel } = require("../models/User");
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

secureRouter.get('/get/plans',async (req,res)=>{
    try{
        logger.info('test')
        const user = req.user
        logger.info(user.user_id)
        let subscribedMealPlans = await SubscriptionModel.aggregate([
            {
                $lookup : {
                    from : "mealplans",
                    foreignField : "_id",
                    localField: "meal_plan_id",
                    as : "meal_plan"
                }
            },
            {
                $unwind : "$meal_plan"
            },
            {
                $match : {user_id : mongoose.Types.ObjectId(user.user_id)}
            }
        ])
        logger.info(JSON.stringify(subscribedMealPlans))
        //logger.info(JSON.stringify(subscribedMealPlans))
        res.json({status : true, data : subscribedMealPlans})
    }catch(err){
        logger.error(err)
        res.json({"status" : false, "error" : err})
    }
})



module.exports = { secureRouter };
