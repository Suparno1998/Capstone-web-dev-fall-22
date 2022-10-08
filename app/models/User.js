const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        unique : true,
    }
})

const UserModel = mongoose.Model(UserSchema,'users')
module.exports = {}