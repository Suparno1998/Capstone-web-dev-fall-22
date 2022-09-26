const logger = require('./logger')
const { MongoClient } = require('mongodb')

let db = null

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

