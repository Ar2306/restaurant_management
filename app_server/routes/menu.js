var express = require("express");
var router = express.Router();
var menuController = require("../controllers/menuController");

// Get all menu items
router.get("/", menuController.getMenuItems);

module.exports = router;
