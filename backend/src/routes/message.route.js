import express from "express";
import { getUsersForidebar } from "../controllers/message.controller.js";

const router=express.Router();

router.get("/users",protectRoute,getUsersForidebar);
router.get("/conversations",protectRoute,getConversationsForidebar);

export default router;
