const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    fullName : {type : String, required : true},
    shippingAddress : {type : String, required : true},
    zipCode : {type : String, required : true},
    email : {type : String, required : true},
    phoneNum : {type : String, required : true},
    cartTotal : {type : Number, required : true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
