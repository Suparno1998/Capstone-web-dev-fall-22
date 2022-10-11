const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "news@themadcooks.me", // generated ethereal user
      pass: "testab101", // generated ethereal password
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

module.exports = {sendEmail}