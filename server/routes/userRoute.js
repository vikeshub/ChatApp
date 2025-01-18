import express from "express"
import { getOtherUser, login, logout, register } from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router=express.Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").post(logout)
router.route("/").post(isAuthenticated,getOtherUser)



export default router;

