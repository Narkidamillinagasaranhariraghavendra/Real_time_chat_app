import express from "express";
import { getUsersForidebar } from "../controllers/message.controller.js";

const router=express.Router();

router.get("/users",protectRoute,getUsersForidebar);
router.get("/conversations",protectRoute,getConversationsForidebar);
router.get("/:id",protectRoute,getmessages);
router.post("/send/:id",protectRoute,XMLHttpRequest,upload.single("media"),sendMessage);
//todo:show this in the frontend part
export default router;
