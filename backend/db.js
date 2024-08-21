import { MongoClient } from "mongodb";

let db;
async function connectToDB(cb) {
    const url = "mongodb+srv://thivariniharika:#Harika@1001@cluster0.twvqtbz.mongodb.net/"
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("AST_Database");
    cb();
}

// connectToDB()

export { connectToDB, db };