// routes/signin.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user"); // Assuming you have a User model for sign-in

// Render the sign-in page
router.get("/", (req, res) => {
  res.render("signin", { title: "Sign In" });
});

// Handle sign-in form submission
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .render("signin", { error: "Invalid email or password." });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .render("signin", { error: "Invalid email or password." });
    }

    // Redirect to home page after successful login
    res.redirect("/");
  } catch (error) {
    console.error("Error during sign-in:", error);
    res.status(500).send("Internal server error.");
  }
});

module.exports = router;
