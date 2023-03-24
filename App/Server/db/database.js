const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({
  path: ".env",
});

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;

const connectDB = async () => {
  try {
    await mongoose
      .connect(
        `mongodb+srv://${USER}:${PASSWORD}@power-rangers.9psnhuv.mongodb.net/test`
      )
      .then(() => console.log("DB Connected!"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
