const nodemailer = require('nodemailer')
const sha1 = require('sha1')
require('dotenv').config()
const constants = require('../constants')(process.env.MODE)
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
    console.log(email,token)
    let body = `<strong> Hi there, </strong><br> <p> Please click on this <a href="${emailLink}">link</a> to verify your account, or copy paste the address into your browser's address bar </p> <a href="${emailLink}">${emailLink}</a>`
    let response = await sendEmail(email, "Verification Email",body, true, "Test Email <ssuparno1998@gmail.com>")
    console.log(response)
}

const sendForgetPasswordEmail = async (email)=>{
    const token = sha1(makeid(20))
    let emailLink = `${constants.main_url}/reset?token=${token}&email=${email}`
    let body = `<strong> Hi there, </strong><br> <p> Please click on this <a href="${emailLink}">link</a> to reset your password, or copy paste the address into your browser's address bar </p> <a href="${emailLink}">${emailLink}</a>`
    let response = await sendEmail(email, "Passowrd Reset Email",body, true, "Test Email <ssuparno1998@gmail.com>")
    console.log(response)
    return token
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


module.exports = {sendEmail, sendVerificationEmail, sendForgetPasswordEmail}