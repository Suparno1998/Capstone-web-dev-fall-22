const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UserSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        unique : true,
    },
    isConfirmed : {
        type : Boolean,
        required : true,
        default : false,
    },
    verificationToken : {
        type : String,
        required : true,
        unique : true
    },
    role : {
        type : String,
        required : true,
        enum : ["admin","user"],
        default : "user"
    },
    status :{
        type : Number,
        default : 1
    }
})

UserSchema.pre('save', async function(next) {
        const user = this;
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next();
      }
)

UserSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
  
    return compare;
}

const UserModel = mongoose.model('users', UserSchema)
module.exports = { UserModel }