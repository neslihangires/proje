const newLocal = require('express');

var express = require('express');

var router = express.Router();

var ctrregister=require('../controller/registerController');

router.get('/', ctrregister.register);

router.post('/', ctrregister.indexRegister);

module.exports = router;