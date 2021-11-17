const express = require('express');
const router = express.Router();
const path = require('path');
const uploadProfImg = require('../middleware/upload_profileImg');

let mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/register', mainController.register);
router.post('/register', uploadProfImg.single('registerImg'), mainController.create);

router.get('/login', mainController.login);




module.exports = router;