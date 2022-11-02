const mongoose = require('mongoose')
const UserProfileSchema = mongoose.Schema({
    /* email : {
        type : String,
        required : true,
    }, */
    user_id : {
        type : String,
        required : true,
    },
    firstname : {
        type : String,
    },
    lastname : {
        type : String,
    },
    contactno : {
        type : String,
    }
})


const UserProfileModel = mongoose.model('userprofile', UserProfileSchema)
module.exports = { UserProfileModel }