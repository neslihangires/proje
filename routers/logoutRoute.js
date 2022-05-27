var express = require('express');

var router = express.Router();

var ctrlogout = require('../controller/logoutController');


router.get('/', ctrlogout.logout);


module.exports = router;
