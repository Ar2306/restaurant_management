require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/user");
const MenuItem = require("../models/menu_items");
const Booking = require("../models/booking");

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
    const data = await User.findOne({ email });
    return data;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return -1;
  }
};

const getMenu = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected successfully!");
    const data = await MenuItem.find();
    return data;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return -1;
  }
};

const getMenuId = async (id) => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected successfully!");
    const data = await MenuItem.findById(id);
    return data;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return -1;
  }
};

const saveBooking = async (data) => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected successfully!");
    await Booking.insertMany([data]);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return -1;
  }
};

module.exports = { createUser, findUser, getMenu, saveBooking, getMenuId };
