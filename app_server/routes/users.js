const express = require("express");
const router = express.Router();

// Import your user controller
const userController = require("../controllers/others");
router.get("/", (req, res) => {
  res.send("Users listing");
});

// Additional user routes can be added here
router.get("/resource", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
