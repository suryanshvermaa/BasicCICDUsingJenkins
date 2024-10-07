import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import cors from "cors";


const app=express();
app.use(cors({allowedHeaders:"*",origin:"*"}));
const dbUrl=process.env.MONGO_URI;
const connectDB=async()=>{
    try {
        await mongoose.connect(String(dbUrl));
        console.log("db connection successful");
        
    } catch (error) {
        console.log("error in connecting db:",error.message);
        
    }
}

app.get('/',(req,res)=>{
    res.send("server is running fine V2");
})

app.get('/connectionToFrontend',(req,res)=>{
    res.send('connection successful');
})

const PORT=process.env.PORT||8080;
app.listen(PORT,async()=>{
   await connectDB();
    console.log("Server is running on port ",PORT);
    
})
