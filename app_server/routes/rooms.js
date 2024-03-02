const express = require('express');
const router = express.Router();
const ctrlRooms = require('../controllers/rooms');

/* GET home page. */
router.get('/', ctrlRooms.rooms);

module.exports = router;
