const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index: (req,res) => { 
        const novedad = products.filter((prod) => prod.novedad == true);
        const masElegidos = products.filter((prod) => prod.ventas == 100);

        res.render('home', {novedad, masElegidos, toThousand});
    },
    register: (req,res) => {
        
        res.render('register');
    },
    create: (req,res) => {
        const newUser = {
		
			id : users[users.length-1].id + 1, 
			...req.body,
			image: req.file ? req.file.filename : '',

			};
		
		users.push(newUser);

		fs.writeFileSync(usersFilePath,JSON.stringify(users,null,' '));
		

		res.redirect('/');   


    },

    login: (req,res) => {
        res.render('login');
    }
}

module.exports = mainController;