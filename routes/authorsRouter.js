const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authorsController');

router.get('/admin', authorsController.list);
router.get('/search', authorsController.search);

router.get('/create', authorsController.create);
router.post('/', authorsController.store);

router.get('/edit/:id', authorsController.edit);
router.put('/:id', authorsController.update);

router.get('/delete/:id', authorsController.delete);
router.delete('/delete/:id', authorsController.destroy);

module.exports = router;