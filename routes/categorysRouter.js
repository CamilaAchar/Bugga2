const express = require('express');
const router = express.Router();
const categorysController = require('../controllers/categorysController');

router.get('/admin', categorysController.list);
router.get('/search', categorysController.search);

router.get('/create', categorysController.create);
router.post('/', categorysController.store);

router.get('/edit/:id', categorysController.edit);
router.put('/:id', categorysController.update);

router.get('/delete/:id', categorysController.delete);
router.delete('/delete/:id', categorysController.destroy);

module.exports = router;