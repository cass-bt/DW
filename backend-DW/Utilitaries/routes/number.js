const express = require('express');
const router = express.Router();
const numberController = require('../controllers/numberController');

router.get('/:action', numberController.processNumber);

module.exports = router;
