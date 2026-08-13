import express from "express";
import "dotenv/config";
import cors from "cors";
import fs from "fs";
import path from "path";
import { clerkMiddleware } from "@clerk/express";
import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";
import clerkWebhook from "./webhooks/clerk.webhook.js";
import job from "./lib/cron.js";



const app = express();
const PORT = process.env.PORT || 3000;
const frontendUrl = process.env.frontend_url;
const publicDir = path.join(process.cwd(),"public");
//it should be in raw format because clerk sends the webhook in raw format and if we use express.json() then it will not work
app.use("/api/webhooks/clerk", express.raw({ type: "application/json" }),clerkWebhook);
app.use(express.json());
app.use(cors({ origin: frontendUrl, credentials: true }));
app.use(clerkMiddleware());
app.get("/health",(req,res)=>{
    
    res.status(200).json({ message: "Server is running!" });
});

if (fs.existsSync(publicDir)){

    app.use(express.static(publicDir));

    app.get("/{*any}",  (req,res,next)=>{
        res.sendFile(path.join(publicDir, "index.html"));
    })
}

app.listen(PORT, () => {
    connectDB();
    console.log(`server is up and running on port ${PORT}`);

    if (process.env.NODE_ENV === "production"){
        job.start()
    }
});