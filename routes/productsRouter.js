const express = require('express');
const router = express.Router();
const uploalBookImg = require('../middleware/upload_booksImg');
const productController = require('../controllers/productController');


router.get('/', productController.index);
router.get('/carrito', productController.carrito);

router.get('/create', productController.create);
router.post('/', uploalBookImg.single('bookImg'), productController.store);

router.get('/:id/', productController.detail);

router.get('/edit/:id', productController.edit);
router.put('/:id', uploalBookImg.single('image'), productController.update);

router.delete('/:id', productController.delete);



module.exports = router;