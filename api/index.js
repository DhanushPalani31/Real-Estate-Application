import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./src/config/db.js";

const app=express();

dotenv.config();

app.listen(process.env.PORT,async()=>{
    await connectDB();
    console.log(`Server is running succesfully on the ${process.env.PORT} port`);
    
})