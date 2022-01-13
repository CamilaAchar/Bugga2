const express = require('express');
const router = express.Router();

let mainController = require('../controllers/mainController');


router.get('/', mainController.index);
router.get('/search', mainController.search);

module.exports = router;