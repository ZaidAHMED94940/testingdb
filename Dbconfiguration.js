const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const mongodb_connection_string = process.env.mongodb_connection_string;

const databaseConnection = async () => {
  try {
    await mongoose.connect(mongodb_connection_string);
    console.log(`Successfully connected to database`);
  } catch (error) {
    console.log(`Unable to connect to database due to error ${error}`);
  }
};

module.exports = databaseConnection;