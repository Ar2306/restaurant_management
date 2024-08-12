const express = require("express");
const router = express.Router();
const ctrlMain = require("../controllers/main");
const ctrlLocations = require("../controllers/locations");
const ctrlOthers = require("../controllers/others");

router.get("/", ctrlLocations.home);
router.get("/menu", ctrlLocations.menu);
router.get("/contact", ctrlLocations.contact);
router.get("/about", ctrlLocations.about);
router.get("/blog", ctrlLocations.blog);

module.exports = router;
router.get("/", ctrlMain.index);
module.exports = router;
