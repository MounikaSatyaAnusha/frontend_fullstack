// import { MongoClient } from "mongodb";

// let db;

// async function connectToDB(cb) {
//     const url = "mongodb+srv://thivariniharika:Harika1001@cluster0.twvqtbz.mongodb.net/"
//     const client = new MongoClient(url);
//     await client.connect();
//     db = client.db("AST_Database");
//     cb();

// }
// // connectToDB()

// export { connectToDB, db };



import { MongoClient } from "mongodb";

let db;

async function connectToDB(cb) {
    const url = "mongodb+srv://thivariniharika:Harika1001@cluster0.twvqtbz.mongodb.net/";

    try {
        const client = new MongoClient(url);
        await client.connect();
        db = client.db("AST_Database");
        console.log("Connected to MongoDB successfully.");
        cb();
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        // Optionally, handle the error further or rethrow it
    }
}

export { connectToDB, db };
