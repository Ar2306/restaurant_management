require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/user");

const URL = process.env.MONGO;

const createUser = async (data) => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected successfully!");
    await User.insertMany([data]);
    return 1;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return -1;
  }
};

const findUser = async (email) => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected successfully!");
    const data = await User.findOne({email});
    return data;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return -1;
  }
};



module.exports = {createUser, findUser};
