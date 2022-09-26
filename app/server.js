const express = require('express')
const path = require('path')
const logger = require('./utils/logger')
const { connectToDB, getDb } = require('./utils/dbHandler')
require('dotenv').config()
//logger.info(process.env.PORT, process.env.DB_URL, process.env.BUILD_PATH)
const app = express()
const PORT = process.env.PORT ? process.env.PORT : 3000
const DB_URL = process.env.mode === "DEV" ? "mongodb://localhost:27017/capstonedb": "mongodb+srv://root:xFNqHuDfLCRbbpKy@cluster.nfwhf.mongodb.net/capstonedb?retryWrites=true&w=majority" //process.env.DB_URL
app.use(express.static("./frontend/public"))

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

//testing new commit