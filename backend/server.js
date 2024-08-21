import cors from 'cors';
import express from 'express';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { connectToDB, db } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// Middleware and routes
app.get('/', (req, res) => {
  res.json("Server is running very quickly");
});

// app.post('/signin', async (req, res) => {
//   try {
//     const found = await db.collection("paie").findOne({ email: req.body.email });
//     console.log(found);
//     if (found && found.password === req.body.password) {
//       console.log("login successfully");
//       res.json({ message: "login successfully" });
//     } else {
//       console.log("failed to login");
//       res.json({ error: "login failed" });
//     }
//   } catch (error) {
//     console.log("error occurred");
//     res.json({ message: "login failed during login" });
//   }
// });
app.post('/signin', async(req, res) => {
  console.log(req.body)
  await db.collection("paie").findOne({email:req.body.email})
  .then((result)=>{
      console.log(result)
      if(result?.Password===req.body.password){
          res.json({message:"login sucess", values:result})
      } else {
          res.json({error:"user not found"})
      }
  })
  .catch((e)=>console.log(e))
})

app.post('/adminsignin', async (req, res) => {
  try {
    const found = await db.collection("paie").findOne({ email: req.body.email });
    console.log(found);
    if (found && found.password === req.body.password) {
      console.log("login successfully");
      res.json({ message: "login successfully" });
    } else {
      console.log("failed to login");
      res.json({ error: "login failed" });
    }
  } catch (error) {
    console.log("error occurred");
    res.json({ message: "login failed during login" });
  }
});



app.post('/signup',async (req, res) => {
  const { name, email, password, phone } = req.body;
  
  try {
    // Check if the email already exists
    const existingUser = await db.collection("paie").findOne({ email});
    if (existingUser) {
      return res.json({ success: false, error: "Email already exists. Please sign in." });
    }

    // Insert new user if email doesn't exist
    const result = await db.collection("paie").insertOne({
      Name: name,
      email: email,
      Password: password,
      Phone: phone,
    });

    if (result.acknowledged) {
      res.status(201).json({ success: true, message: "Signup successful", values: result });
    } else {
      res.status(500).json({ success: false, error: "Failed to sign up" });
    }
  } catch (error) {
    console.error("Error occurred during signup:", error);
    res.status(500).json({ success: false, error: "An error occurred during signup" });
  }
});

app.post('/post', async (req, res) => {
  const { name, information, place, date, contact, otherDetails } = req.body;

  try {
    const database = client.db("AST-Database");
    const collection = database.collection("ast");

    const result = await collection.insertOne({
      Name: name,
      Information: information,
      Location: place,
      Date: date,
      Contact: contact,
      OtherDetails: otherDetails,
    });

    if (result.acknowledged) {
      res.json({ success: true, message: "Posted successfully" });
    } else {
      res.json({ success: false, message: "Failed to post data" });
    }
  } catch (error) {
    console.error("Error occurred during post:", error);
    res.status(500).json({ success: false, error: "An error occurred during post" });
  }
});

app.post('/register', async (req, res) => {
  const { name, email, age, gender, contact, address } = req.body;

  try {
    const result = await db.collection("paie").insertOne({
      Name: name,
      Email: email,
      Age: age,
      Gender: gender,
      Contact: contact,
      Address: address,
    });

    if (result.acknowledged) {
      res.json({ success: true, message: "Registered successfully" });
    } else {
      res.json({ success: false, message: "Failed to register data" });
    }
  } catch (error) {
    console.error("Error occurred during register:", error);
    res.status(500).json({ success: false, error: "An error occurred during register" });
  }
});

app.post('/adminsignup', async (req, res) => {
  try {
    const result = await db.collection("paie").insertOne({
      Name: req.body.name,
      DateOfBirth: req.body.date,
      email: req.body.email,
      Password: req.body.password,
      Phone: req.body.phone,
      Address: req.body.address,
    });
    
    if (result.acknowledged) {
      res.json({ message: "Signup successful", values: result });
    } else {
      res.json({ error: "Failed" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.post('/students', async (req, res) => {
  try {
    const result = await db.collection("paie").find().toArray();
    res.send(result);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

connectToDB(() => {
    app.listen(1000, () => {
        console.log("server running at 1000 ");
    })
})