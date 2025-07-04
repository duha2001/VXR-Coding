const express = require('express');
const router = express.Router();
const sumController = require('../controllers/sumController');

router.get('/', sumController.calculateSum);
module.exports = router;
