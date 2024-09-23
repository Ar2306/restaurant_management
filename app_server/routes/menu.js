const express = require("express");
const router = express.Router();
const db = require("../models/db");
const ctrlLocations = require("../controllers/locations");

router.get("/", ctrlLocations.menu);
db.getdb();

module.exports = router;
