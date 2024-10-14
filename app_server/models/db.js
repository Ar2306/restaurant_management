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
    const savedBooking = await Booking.create(data); // Create and return the booking
    return savedBooking; // Return the saved booking object
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return -1;
  }
};
const findBookingById = async (id) => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected successfully!");
    const data = await Booking.findById(id);
    return data;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return null;
  }
};
module.exports = {
  createUser,
  findUser,
  getMenu,
  saveBooking,
  getMenuId,
  findBookingById,
};
