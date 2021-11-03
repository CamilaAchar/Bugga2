const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainController = {
    index: (req,res) => { 
        const novedad = products.filter((prod) => prod.novedad == true);
        const masElegidos = products.filter((prod) => prod.ventas == 100);

        res.render('home', {novedad, masElegidos});
    },
        register: (req,res) => {
        res.render('register');
    },
    login: (req,res) => {
        res.render('login');
    },
    carrito: (req,res) => {
        const requireId = req.params.id;
        const requiredProduct = products.find((prod) => {
            const igual = prod.id == requireId;
            return igual;
        });
        res.render('carrito', {products});
    }

}

module.exports = mainController;