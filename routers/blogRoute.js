var express = require('express');

var router = express.Router();

var ctrblog = require('../controller/blogController');

router.get('/', ctrblog.Blog);

router.get('/delete/:id', ctrblog.postsil);

module.exports = router;