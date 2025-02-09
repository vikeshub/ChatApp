import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const recieverId = req.params.id;
    const { message } = req.body;

    let gotConversion = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!gotConversion) {
      gotConversion = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }

    const newMessage = await Message.create({
      senderID: senderId,  
      receiverID: recieverId,
      message,
    });
    if (newMessage) {
      gotConversion.messages.push(newMessage._id);
    }
    await gotConversion.save();

    // socket io

    return res.status(201).json({
      message:"Message send successfully"
    })
  } catch (error) {
    console.log(error);
  }
};


// get message
export const getMessage =async (req,res)=>{
  try {
    const recieverID=req.params.id;
    const senderID=req.id;
    const conversation=await Conversation.findOne({
      participants:{$all :[senderID,recieverID]}
    }).populate("messages")
    // console.log(conversation)
    return res.status(200).json(conversation?.messages)
  } catch (error) {
    console.log(error)
  }
}
