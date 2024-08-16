const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations'); 

router.get('/', ctrlLocations.menu);

module.exports = router;
