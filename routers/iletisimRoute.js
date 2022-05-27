var express = require('express');

var router = express.Router();

var ctriletisim = require('../controller/iletisimController');

router.get('/',ctriletisim.Iletisim);

module.exports = router;