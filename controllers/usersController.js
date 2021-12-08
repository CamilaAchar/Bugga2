const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const usersReg = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator');
const interests = ['Ciencia Ficción', 'Aventuras', 'Romance', 'Investigación', 'Universitarios', 'Libería'];


const usersController = {
    register: (req,res) => {
            
        res.render('register', {interests});
    },
    create: (req,res) => {

        const errors = validationResult(req);

        if (errors.isEmpty()){

        const newUser = {
        
            id: usersReg[usersReg.length-1].id + 1, 
            ...req.body,
            pass: bcrypt.hashSync(req.body.pass, 10),
            image: req.file ? req.file.filename : '',

            };
        
        usersReg.push(newUser);

        fs.writeFileSync(usersFilePath,JSON.stringify(usersReg,null,' '));
        

        res.redirect('/');   
        
        }else{
            res.render('register', {errors: errors.mapped(), old: req.body, interests});
        }

    },

    login: (req,res) => {
        res.render('login');
    },

    processLogin: (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()){

        //chequeo si el usuario existe, sino importo lo que está en el json
        let users;
        if (users == '') {
            users = [];
        } else {
            users = usersReg;
        }
        let userLog = [];
        for (let i = 0; i < users.length; i++){

            if (users[i].mail == req.body.mail  && bcrypt.compareSync(req.body.pass, users[i].pass)) {
                 userLog = users[i];
            }
        }
            if (userLog == ''){

                return res.render('login', {errors: {
                    pass: {
                        msg: 'Credenciales Inválidas'
                    }
            }});
            }

            req.session.userLogin = userLog;

            if (req.body.recordar != undefined){
                res.cookie('recordar', userLog.mail, {maxAge: 120000 * 30});
            }

            res.redirect('/user/profile'); 
            // res.redirect('/products');   
        
            } else {
            res.render('login', {errors: errors.mapped(), old: req.body});
        }
    },

    profile: (req,res)=>{
        res.render('profile', {
            user: req.session.userLogin
        });
    },
    destroy: (req, res)=>{
        res.clearCookie('recordar');
        req.session.destroy();
        return res.redirect('/user/login');
    }
}
module.exports = usersController;