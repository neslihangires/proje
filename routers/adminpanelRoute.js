var express = require('express');

var router = express.Router();

var ctradmin = require('../controller/adminController');

router.get('/', ctradmin.admin)

router.get('/delete/:id', ctradmin.kullanicisil);

module.exports = router;
