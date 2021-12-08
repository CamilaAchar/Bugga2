const express = require('express');
const router = express.Router();
const path = require('path');
const { body } = require('express-validator');
const usersController = require('../controllers/usersController');
const uploadProfImg = require('../middleware/upload_profileImg');
const guestMiddleware = require('../middleware/guestMiddleware');
const loggedMiddleware = require('../middleware/loggedMiddleware');


//Validaciones
const validateRegister = [
    body('name').notEmpty().withMessage('* Ingresá tu nombre'),
    body('user').notEmpty().withMessage('* Ingresá tu nombre de usuario').bail().isLength({min:5}).withMessage('El nombre de usuario debe contener como mínimo 5 caracteres'),
    body('mail').notEmpty().withMessage('* Ingresá tu mail').bail().isEmail().withMessage('* Ingresá un e-mail válido'),
    body('pass').notEmpty().withMessage('* Ingresá una contraseña').bail().withMessage('La contraseña debe contener como mínimo 6 caracteres')
];
const validateLogin = [
    body('mail').notEmpty().withMessage('* Ingresá tu mail').bail().isEmail().withMessage('* Ingresá un e-mail válido'),
    body('pass').notEmpty().withMessage('* Ingresá una contraseña')
];

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', uploadProfImg.single('registerImg'), validateRegister, usersController.create);
router.get('/profile', loggedMiddleware, usersController.profile);
router.get('/logout', usersController.destroy);

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', validateLogin, usersController.processLogin);

router.get('/check', function(req,res){
    if (req.session.userLogin == undefined){
        res.send('No estas logueado');
    } else {
        res.send('Estas logueado con el mail: ' + req.session.userLogin.mail);
    }
});

module.exports = router;