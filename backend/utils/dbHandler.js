const logger = require('./logger')
const { MongoClient } = require('mongodb')

require('dotenv').config({
    path : "./secrets.env"
})
let db = null

const dbURL = process.env.MODE === "DEV" ? process.env.DEV_DB_URL : process.env.PRODUCTION_DB_URL

async function connectToDB(dbUrl){
    try{
        const client = new MongoClient(dbUrl, { useNewUrlParser: true })
        await client.connect();
        logger.info(`Database connected successfully @ ${dbUrl}`);
        db = client.db();
        return db
    }catch(err){
        logger.error(err.message)
    }
}

function getDb(){
    return db
}

module.exports = { connectToDB, getDb }

