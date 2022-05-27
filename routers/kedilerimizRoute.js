var express = require('express');

var router = express.Router();

var ctrkedilerimiz = require('../controller/kedilerimizController');

router.get('/', ctrkedilerimiz.kedilerimiz);

router.get('/delete/:id', ctrkedilerimiz.kedisil);

module.exports = router;