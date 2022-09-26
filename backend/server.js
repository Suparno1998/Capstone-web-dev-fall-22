const express = require('express')
const logger = require('./utils/logger')
const { connectToDB, getDb } = require('./utils/dbHandler')
require('dotenv').config({
    path : "secrets.env"
})

const app = express()
const PORT = process.env.PORT 
const DB_URL = process.env.mode === "DEV" ? process.env.DEV_DB_URL : process.env.PRODUCTION_DB_URL


//testing endpoint
app.get('/check',(req,res)=>{
    try{
        logger.info('test-endpoint works')
        res.send({"status" : "works","data" : ["Suparno", "Mohammed", "Meet", "Rupesh" , "Vasu"]})
    }catch(err){
        logger.error(err.message)
    }
})

app.listen(PORT,async (req,res)=>{
    await connectToDB(DB_URL)
    logger.info(`Server is running at ${PORT}`)
})