const nodemailer = require('nodemailer')
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
module.exports = {sendEmail, sendVerificationEmail}