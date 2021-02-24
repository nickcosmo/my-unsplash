const MongoClient = require("mongodb").MongoClient

require("dotenv").config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

let db;

const initDb = async (callback) => {
    if(db) {
        console.log('Database connection already established');
        return callback(null, db);
    }
    try {
        const clientConnection = await client.connect();
        db = clientConnection.db();
        callback(null, db);
    } catch(err) {
        callback(err);
    }
}

const getDb = () => {
    if(!db) {
        throw Error('Database connection has not been established');
    }
    return db;
}

exports.getDb = getDb;
exports.initDb = initDb;