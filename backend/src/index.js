import express from "express";
import "dotenv/config";
import cors from "cors";
import clerkmiddleware from "@clerk/express"
import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";


const app = express();
const PORT = process.env.PORT || 3000;
const frontendUrl = process.env.frontend_url;

app.use(express.json());
app.use(cors({ origin: frontendUrl, credentials: true }));
app.use(clerkMiddleware());
app.get("/health",(req,res)=>{
    
    res.status(200).json({ message: "Server is running!" });
});

app.listen(PORT, () => {
    connectDB();
    console.log(`server is up and running on port ${PORT}`);
});