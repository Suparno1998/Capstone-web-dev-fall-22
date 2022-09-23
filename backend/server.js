const express = require('express')
const { connectToDB, getDb } = require('./utils/dbHandler')
require('dotenv').config({
    path : "secrets.env"
})

const app = express()
const PORT = process.env.PORT 

app.listen(PORT,async (req,res)=>{
    await connectToDB()
    console.log(`Server is running at ${PORT}`)
})