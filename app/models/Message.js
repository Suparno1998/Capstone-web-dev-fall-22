const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const MessageSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    message : {
        type : String,
        required: true,
    },
    position : {
        type : Object,
    }

},{timestamps: true })


const MessageModel = mongoose.model('message', MessageSchema)
module.exports = { MessageModel }