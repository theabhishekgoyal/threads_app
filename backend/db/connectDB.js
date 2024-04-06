import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`mongodb connection: ${conn.connection.host}`);
  } catch (err) {
    console.log(`mongodb connection error: ${err}`);
  }
};

export default connectDB;
