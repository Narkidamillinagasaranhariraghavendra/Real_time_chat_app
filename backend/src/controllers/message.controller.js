import User from "../models/user.model.js";
import Message from "../models/message.model.js";


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
            {$match: { $or: [{ senderId: loggedInUserId }, { receiverId: loggedInUserId }] }},
            {$group: {
                _id:{$cond: [{ $eq: ["$senderId", loggedInUserId] }, "$receiverId", "$senderId"]},
            lastMessageAt:{$max:"$createdAt"}
            }},
            {$sort:{ lastMessageAt:-1}},
            {$lookup:{from:"users",localField:"_id",foreignField:"_id",as:"user"}},

            {$replaceRoot:{newRoot:{$first:"$user"}
            }},

            {project:{clerkId:0}},



        ]);

        res.status(200).json(conversations);
    } catch (error) {
        console.error("Error fetching conversations for sidebar:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}