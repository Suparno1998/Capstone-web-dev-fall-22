const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SubscriberSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true,
    }
})


const SubscriberModel = mongoose.model('subscriber', SubscriberSchema)
module.exports = { SubscriberModel }