import mongoose from "mongoose";
import "dotenv/config";

// connect to mongoDB

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);   // 1 means failure
  }
};
