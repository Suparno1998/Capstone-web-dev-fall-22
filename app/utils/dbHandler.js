const logger = require('./logger')
const mongoose = require('mongoose')

let db = null

async function connectToDB(dbUrl){
    try{
        db = mongoose.connect(dbUrl)
        logger.info("Database connected to "+dbUrl)
    }catch(err){
        logger.error(err.message)
    }
}

function getDb(){
    return db
}

module.exports = { connectToDB, getDb }

