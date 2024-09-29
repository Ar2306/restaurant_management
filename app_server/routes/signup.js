const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.post("/signup-submit", async function (req, res) {
  try {
    const data = {
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    await User.insertMany([data]);
    res.redirect("/home");
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
