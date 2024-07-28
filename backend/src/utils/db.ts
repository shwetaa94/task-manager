// src/db.ts
import mongoose from "mongoose";

const MONGO_URI ="mongodb+srv://Shweta9416:Shwetaecommerce@cluster0.opu30dm.mongodb.net/" || "mongodb://127.0.0.1:27017/task"

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
