// routes/signup.js
const express = require("express");
const router = express.Router();
const { createAccount, renderSignup, renderSignin, Login } = require("../controllers/Auth");

router.get("/signup", renderSignup);
router.get("/signin", renderSignin);

router.post("/signup", createAccount);
router.post("/signin", Login);

module.exports = router;
