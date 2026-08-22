import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../lib/socket.js";


export async function getUsersForidebar(req,res){

    try{
        const loggedInUserId = req.user._id;
        const filteredUsersId = await User.find({ _id: { $ne: loggedInUserId } }).select("-clerkId");

        res.status(200).json(filteredUsersId);
    } catch (error) {
        console.error("Error fetching users for sidebar:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getConversationsForidebar(req,res){
    try{
        const loggedInUserId = req.user._id;
        const conversations = await Message.aggregate([
            {$match: { $or: [{ senderId: loggedInUserId }, { recieverId: loggedInUserId }] }},
            {$group: {
                _id:{$cond: [{ $eq: ["$senderId", loggedInUserId] }, "$recieverId", "$senderId"]},
            lastMessageAt:{$max:"$createdAt"}
            }},
            {$sort:{ lastMessageAt:-1}},
            {$lookup:{from:"users",localField:"_id",foreignField:"_id",as:"user"}},

            {$replaceRoot:{newRoot:{$first:"$user"}
            }},

            {$project:{clerkId:0}},
        ]);

        res.status(200).json(conversations);
    } catch (error) {
        console.error("Error fetching conversations for sidebar:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getmessages(req,res){

    try{
        const {id:userToChatId}=req.params;
        const myId=req.user._id;

        const messages=await Message.find({
            $or:[
            {senderId:myId,recieverId:userToChatId},
            {senderId:userToChatId,recieverId:myId},
            ]
        }).sort({createdAt:1})
        res.status(200).json(messages);

    }catch(error){

        console.error("Error in getMessages:",error.message);
        res.status(500).json({message:"Internal server error"});

    }
}

export async function sendMessage(req,res){
    try{


        const{text}=req.body;
        const{id:recieverId}=req.params;
        const senderId=req.user._id;

        let imageUrl;
        let videoUrl;

        if (req.file){
            if(!hasImageKitConfig()){
                return res.status(500).json({message:"Media upload is not configured"});
            }
        
        const url= await  uploadChatMedia(req.file);
        if (req.file.mimetype.startsWith("video/")) videoUrl=url;
        else imageUrl=url;
        }
        const newMessage=new Message({
           senderId,
           recieverId,
           text,
           image:imageUrl,
           video:videoUrl,
        })
        await  newMessage.save();


        const receiverSocketId=getReceiverSocketId(recieverId)
        //only send the message in realtime if user is online
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }

        res.status(201).json(newMessage)
    }catch(error){

        console.error("Error in sendmessage:",error.message);
        res.status(500).json({message:"Internal server error"});


    }
}