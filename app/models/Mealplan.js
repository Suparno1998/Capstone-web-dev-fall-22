const mongoose = require('mongoose')
const MealPlanSchema = mongoose.Schema({
    title : {
        type : String,
        required: true,
    },
    short_description : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true 
    },
    price : {
        type : Number,
        requried : true,
    }

},{timestamps: true })


const MealPlanModel = mongoose.model('mealplans', MealPlanSchema)
module.exports = { MealPlanModel }