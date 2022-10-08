const express = require('express')
const authHandler = express.Router()
const logger = require('../utils/logger')
const { getDb } = require('../utils/dbHandler')

//login
authHandler.post('/login',(req,res)=>{

})
//register
authHandler.post('/register',(req,res) => {

})
//verify
authHandler.get('/verify',(req,res)=>{
    //hello
})
module.exports =  { authHandler }