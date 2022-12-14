const mongoose = require('mongoose')
const SubscriptionSchema = mongoose.Schema({
    user_id : {
        type : mongoose.Types.ObjectId,
        required : true,
    },
    meal_plan_id : {
        type : mongoose.Types.ObjectId,
        required : true,
    },
    startDate : {
        type : String,
        required: true,
    },
    end_date : {
        type : String,
        required : true,
    },
    duration : {
        type : String,
        required : true 
    },
    order_id : {
        type : mongoose.Types.ObjectId,
        required : true,
    }
})


const SubscriptionModel = mongoose.model('subscriptions', SubscriptionSchema)
module.exports = { SubscriptionModel }