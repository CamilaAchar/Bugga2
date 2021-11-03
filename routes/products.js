const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/create', productController.create);
router.get('/:id/', productController.detail);
router.get('/edit/:id', productController.edit);


module.exports = router;