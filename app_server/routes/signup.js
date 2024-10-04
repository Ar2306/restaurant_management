// routes/signup.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user"); // Assuming you have a User model for sign-up

// Render the sign-up page
router.get("/", (req, res) => {
  res.render("signup", { title: "Create Account" });
});

// Handle sign-up form submission
router.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  // Validate the input
  if (!username || !email || !password) {
    return res
      .status(400)
      .render("signup", { error: "All fields are required." });
  }

  // Hash the password before saving
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database collection
    await newUser.save();

    // Redirect to sign-in page after successful registration
    res.redirect("/signin");
  } catch (error) {
    console.error("Error during sign-up:", error);
    res.status(500).send("Internal server error.");
  }
});

module.exports = router;
