import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import userRouter from "./routes/user.route.js"
const app=express();

dotenv.config();

app.use('/api/user',userRouter);

app.listen(process.env.PORT,async()=>{
    await connectDB();
    console.log(`Server is running succesfully on the ${process.env.PORT} port`);
    
})