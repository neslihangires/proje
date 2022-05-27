var express = require('express');

var router = express.Router();

var ctrlindexfip = require('../controller/indexfipController');

router.get('/', ctrlindexfip.indexfip)

router.get('/ara', ctrlindexfip.ara)

module.exports = router;
