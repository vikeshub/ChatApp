import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import { register } from "./controllers/userController.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(cookieParser())

//routes
// http:localhost:8000/api/v1/user/register
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
  connectDb();
});
