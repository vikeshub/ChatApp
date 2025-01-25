import { Conversation } from "../models/conversationModel";
import { Message } from "../models/messageModel";

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
      senderId,
      recieverId,
      message,
    });
    if (newMessage) {
      gotConversion.messages.push(newMessage._id);
    }
    await gotConversion.save();
  } catch (error) {
    console.log(error);
  }
};
