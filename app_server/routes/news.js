const express = require('express');
const router = express.Router();
const ctrlNews = require('../controllers/news');

/* GET home page. */
router.get('/', ctrlNews.news);

module.exports = router;
