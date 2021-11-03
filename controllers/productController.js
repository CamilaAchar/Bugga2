const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {


    create: (req,res) => {
        res.render('agregarProducto');
    },

    store: (req,res) => {

    }, 

    edit: (req,res) => {
        res.render('editarProducto');
    },

    update: (req,res) => {

    },

    detail: (req,res) => {
        const requireId = req.params.id;
        const requiredProduct = products.find((prod) => {
            const igual = prod.id == requireId;
            return igual;
        });

        res.render('detalleProducto', {products: requiredProduct});

    }
}


module.exports = productController;