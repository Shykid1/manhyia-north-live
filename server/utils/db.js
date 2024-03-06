const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectionString = process.env.MONGODB_URL;

const dbConnect = async () => {
  mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

module.exports = dbConnect;
