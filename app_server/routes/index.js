const express = require("express");
const router = express.Router();
const ctrlLocations = require("../controllers/locations");
// const ctrlAuth = require("../controllers/authController");
// Location Routes
router.get("/", ctrlLocations.home);
router.get("/menu", ctrlLocations.menu);
router.get("/contact", ctrlLocations.contact);
router.get("/about", ctrlLocations.about);
router.get("/blog", ctrlLocations.blog);

// Authentication Routes
// router.get("/signin", ctrlAuth.getSignIn);
// router.post("/signin", ctrlAuth.postSignIn);
// router.get("/signup", ctrlAuth.getSignUp);
// router.post("/signup", ctrlAuth.postSignUp);

router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "Create Account", page: "signup" });
});

router.post("/signup", function (req, res) {
  // Add your sign-up logic here
  const { name, email, password } = req.body;
  // Save the user to the database, etc.
  res.redirect("/signin");
});

router.get("/signin", function (req, res, next) {
  res.render("signin", { title: "Sign In", page: "signin" });
});

router.post("/signin", function (req, res) {
  // Here you can add authentication logic
  const { email, password } = req.body;
  // Check user credentials
  res.redirect("/");
});

module.exports = router;
