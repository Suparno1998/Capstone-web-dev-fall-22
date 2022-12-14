const nodemailer = require('nodemailer')
const sha1 = require('sha1')
require('dotenv').config()
const logger = require('./logger')('utils/utils.js')
const constants = require('../constants').getConstants(process.env.MODE)
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "myfoodlabsinfo@gmail.com", // generated ethereal user
      pass: "igabcrxeeiovibyy", // generated ethereal password
    },
});

const sendEmail = async (receiverEmail, subject, body, isHTML, sender)=>{
    let mailOptions = {
        from: sender,
        to: receiverEmail,
        subject: subject,
    }
    if(isHTML){
        mailOptions['html'] = body
    }
    else{
        mailOptions['text'] = body
    }
    let info = await transporter.sendMail(mailOptions);
    return info
}

const sendVerificationEmail = async (email,token)=>{
    let emailLink = `${constants.main_url}/auth/verify?token=${token}&email=${email}`
    logger.info(email,token)
    let body = `<strong> Hi there, </strong><br> <p> Please click on this <a href="${emailLink}">link</a> to verify your account, or copy paste the address into your browser's address bar </p> <a href="${emailLink}">${emailLink}</a>`
    let response = await sendEmail(email, "Verification Email",body, true, "Food Labs <myfoodlabsinfo@gmail.com>")
    logger.info(response)
}

const sendForgetPasswordEmail = async (email)=>{
    const token = sha1(makeid(20))
    let emailLink = `${constants.main_url}/reset?token=${token}&email=${email}`
    let body = `<strong> Hi there, </strong><br> <p> Please click on this <a href="${emailLink}">link</a> to reset your password, or copy paste the address into your browser's address bar </p> <a href="${emailLink}">${emailLink}</a>`
    let response = await sendEmail(email, "Passowrd Reset Email",body, true, "Food Labs <myfoodlabsinfo@gmail.com>")
    logger.info(response)
    return token
}

const sendSuccessEmail = async (object) => {
    let body = `<h2>Hi ${object.fullName}</h2><br><br><p>Your payment of ${object.cartTotal} made on ${(new Date()).toISOString().split("T")[0]} from the account of ${object.email}
    has been successfully recieved. We will ship your orders to ${object.shippingAddress} on requested dates. Thank you for choosing us.</p><br><strong>Yours Sincerely <br> Food Labs</strong>`
    let response = await sendEmail(object.email,"Order Confirmed!",body,true,"Food Labs <myfoodlabsinfo@gmail.com>")
}
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


module.exports = {sendEmail, sendVerificationEmail, sendForgetPasswordEmail, sendSuccessEmail}