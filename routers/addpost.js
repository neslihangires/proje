var express = require('express');
var router = express.Router();

var ctraddpost = require('../controller/addpostController');

router.get('/', ctraddpost.addpost);
router.post('/', ctraddpost.indexpost);

module.exports = router;
