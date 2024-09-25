const User = require("../models/users");

// Render Sign In page
const getSignIn = (req, res) => {
  res.render("signin", { title: "Sign In", page: "signin" });
};

// Handle Sign In
const postSignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send("Invalid credentials");
    }
    // If authenticated, redirect or send success response
    res.redirect("/"); // Redirect to home after successful sign-in
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

// Render Sign Up page
const getSignUp = (req, res) => {
  res.render("signup", { title: "Sign Up", page: "signup" });
};

// Handle Sign Up
const postSignUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.redirect("/signin"); // Redirect to sign-in after successful sign-up
  } catch (error) {
    console.error(error);
    res.status(400).send("Error creating account");
  }
};

module.exports = {
  getSignIn,
  postSignIn,
  getSignUp,
  postSignUp,
};
