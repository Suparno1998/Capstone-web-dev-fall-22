const { MongoClient } = require('mongodb')
require('dotenv').config({
    path : "./secrets.env"
})
let db = null

const dbURL = process.env.MODE === "DEV" ? process.env.DEV_DB_URL : process.env.PRODUCTION_DB_URL

async function connectToDB(){
    db = await MongoClient.connect(dbURL)
}

function getDb(){
    return db
}

module.exports = { connectToDB, getDb }