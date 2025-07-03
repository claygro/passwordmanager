import express from "express";
import mongoose from "mongoose";
import router from "./routes/password.routes.js";
import cors from "cors";
import "dotenv/config";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/password", router);
app.listen(process.env.PORT || 8000, async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);

    console.log("server is starting");
  } catch (error) {
    console.log(`error in connecting database ${error}`);
  }
});
