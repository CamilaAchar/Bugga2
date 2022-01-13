const express = require('express');
const router = express.Router();
const uploalBookImg = require('../middleware/upload_booksImg');
const productController = require('../controllers/productController');

router.get('/admin', productController.admin);
router.get('/search', productController.search);

router.get('/', productController.index);
router.get('/carrito', productController.carrito);

router.get('/create', productController.create);
router.post('/', uploalBookImg.single('bookImg'), productController.store);

router.get('/:id/', productController.detail);

router.get('/edit/:id', productController.edit);
router.put('/:id', uploalBookImg.single('bookImg'), productController.update);

router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.destroy);





module.exports = router;