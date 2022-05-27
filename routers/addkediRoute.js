var express = require('express');
const upload = require("../middlewares/multer")

var router = express.Router();

var ctraddkedi = require('../controller/addkediController');

router.get('/', ctraddkedi.kediekle);

router.post('/', upload.single('catimg'), ctraddkedi.kedieklee);

module.exports = router;