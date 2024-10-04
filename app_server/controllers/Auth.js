const bcrypt = require("bcrypt");
const { createUser, findUser } = require("../models/db");

const renderSignup = (req, res) => {
  res.render("signup", { title: "Create Account" });
};

const renderSignin = (req, res) => {
  res.render("signin", { title: "Sign In" });
};

const createAccount = async (req, res) => {
  const { password } = req.body;
  console.log(req.body);

  // Hash the password before saving
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = { ...req.body, password: hashedPassword };
    const status = await createUser(data);
    
    if (status === -1) res.status(409).end("Username or Email already exists !");
    else res.redirect("/signin");

  } catch (error) {

    console.error("Error during sign-up:", error);
    res.status(500).send("Internal server error.");
    
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  try {
    const user = await findUser(email);
    console.log(user);
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
};

module.exports = { createAccount, renderSignup, renderSignin, Login };
