import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({
  path: ".env",
});

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;

const connectDB = async () => {
  try {
    await mongoose
      .connect(`mongodb+srv://${USER}:${PASSWORD}`)
      .then(() => console.log("DB Connected!"));
  } catch (error) {
    console.log(error);
  }
};
