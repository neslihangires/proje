const express = require('express');

const router = express.Router();

const ctrasilar = require('../controller/asilarController');

router.get('/', ctrasilar.Asilar);

module.exports = router;