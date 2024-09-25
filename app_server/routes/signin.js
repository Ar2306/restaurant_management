const express = require("express");
const router = express.Router();
const User = require("../models/users"); // Import the User model

// Sign-in route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If user doesn't exist
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }

    // Compare the password (in real scenarios, hash and compare using bcrypt)
    if (user.password !== password) {
      return res.status(400).send("Invalid email or password");
    }

    // If email and password match, sign in the user
    res.redirect("/menu"); // Redirect to the menu or home page after successful sign-in
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
