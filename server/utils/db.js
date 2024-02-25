import mongoose from "mongoose";
import * as dotenv from 'dotenv'

dotenv.config()

const connectionString = process.env.MONGODB_URL;

export default async function dbConnect () {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
      });
  }