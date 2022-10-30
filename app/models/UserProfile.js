const mongoose = require('mongoose')
const UserProfileSchema = mongoose.Schema({
    /* email : {
        type : String,
        required : true,
    }, */
    firstname : {
        type : String,
        required : true,
    },
    lastname : {
        type : String,
        required : true,
    },
    contactno : {
        type : String,
        required : true,
    }
})


const UserProfileModel = mongoose.model('userprofile', UserProfileSchema)
module.exports = { UserProfileModel }