import { sendMessage } from "../controllers/messageController.js";
import express from express;

const router =express.Router();


router.route("/send/:id").post(sendMessage);

export default router