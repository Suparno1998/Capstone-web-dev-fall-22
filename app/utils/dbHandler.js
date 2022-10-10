const logger = require('./logger')
const mongoose = require('mongoose')

let db = null

async function connectToDB(dbUrl){
    try{
        db = mongoose.connect(dbUrl)
        mongoose.set("useCreateIndex", true)
    }catch(err){
        logger.error(err.message)
    }
}

function getDb(){
    return db
}

module.exports = { connectToDB, getDb }

