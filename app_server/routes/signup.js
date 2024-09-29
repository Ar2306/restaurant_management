const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const mongoose = require("mongoose");

router.post("/signup", async function (req, res) {
  const { name, email, password } = req.body;

  // Basic validation
  //   if (!name || !email || !password) {
  //     return res.status(400).json({ message: "All fields are required" });
  //   }

  try {
    // Check if the user already exists
    await mongoose.connect(
      "mongodb+srv://anand:Ar2306@cluster0.cent8.mongodb.net/Resturant"
    );
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    // Redirect to the sign-in page
    res.redirect("/signin");
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
