var express = require('express');

var router = express.Router();

var ctrilaclar = require('../controller/ilaclarController');

router.get('/', ctrilaclar.Ilaclar);

module.exports = router;