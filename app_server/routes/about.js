const express = require('express');
const router = express.Router();
const ctrlAbout = require('../controllers/about');

/* GET home page. */
router.get('/', ctrlAbout.about);

module.exports = router;
