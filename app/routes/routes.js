const express = require('express')
const router = express.Router()
const logger = require('../utils/logger')
const { SubscriberModel } = require('../models/Subscriber')
const {sendEmail} = require('../utils/utils')



router.post('/newsletter',async (req,res)=>{
    try{
        var subscriber = new SubscriberModel(req.body)
        await subscriber.save()
        let status = await sendEmail(req.body.email,"Thanks for subscribing","<p>You are receiving this email because you are signed up to receive promotional communications. This message was sent by the Food Lab.</p> <strong>Thank you for subscribing to our newsletter</strong>",true,"Newsletter <news@themadcooks.me>")
        logger.info(JSON.stringify(status))
        res.json({"status" : true})
    }catch(e){
        logger.error(e)
        res.json({status:false, error : e})
    }
})


module.exports = {router}