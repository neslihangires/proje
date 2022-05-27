var express = require('express');

var router = express.Router();

var ctrlogin = require('../controller/loginController');


router.get('/', ctrlogin.login);
router.post('/', ctrlogin.indexlogin);

module.exports = router;
