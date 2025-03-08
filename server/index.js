import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database Connection Failed:", error);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
