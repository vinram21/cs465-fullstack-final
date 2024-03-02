const express = require('express');
const router = express.Router();
const ctrlContact = require('../controllers/contact');

/* GET home page. */
router.get('/', ctrlContact.contact);

module.exports = router;
