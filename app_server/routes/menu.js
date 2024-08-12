const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations'); // Adjust if needed

router.get('/', ctrlLocations.menu);

module.exports = router;
