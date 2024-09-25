const express = require("express");
const router = express.Router();
const User = require("../models/users"); // Import the User model

// Sign-up route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("Email already exists");
    }

    // Create a new user instance and save to the database
    user = new User({
      username,
      email,
      password, // In real applications, hash the password before saving using bcrypt
    });

    await user.save();

    // Redirect to sign-in page after successful registration
    res.redirect("/signin");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
