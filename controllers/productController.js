const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const db = require('../database/models');
const { Op } = require('sequelize');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const interests = ['Ciencia Ficción', 'Aventuras', 'Romance', 'Investigación', 'Universitarios', 'Libería'];

const productController = {

    index: (req,res) => {

        db.Productos.findAll()
            .then(function(productos){
                return res.render('productos', {productos,  toThousand})
            })
            .catch(error=>{
                console.log(error);
                    res.send(500);
            })

    },

    create: (req,res) => {

            const autores = db.Autores.findAll();
            const categorias = db.Categorias.findAll();
            Promise.all([autores,categorias])
            .then(([autores,categorias]) =>{
                
                db.Productos.findByPk(req.params.id)
                    .then(function(productos){
                        res.render('agregarProducto', {productos, toThousand, autores, categorias})
                    })    
            })
            .catch(error => res.send(error));
    },

    store: (req,res) => {

		db.Productos.create({
            title: req.body.title,
            id_author: req.body.author,
            id_category: req.body.category,
            price: Number(req.body.price),
            description: req.body.description,
            date_entry: req.body.date_entry,
			image: req.file ? req.file.filename : ''
        })
            .then(productos => {
                res.redirect('/products/admin');
            })
            .catch(error=>{
                console.log(error);
                res.send(500);
            })
    }, 

    detail: (req,res) => {

        db.Productos.findByPk(req.params.id, {
            include: [{association: 'autores'}, {association: 'categorias'}]
        })
            .then(function(productos){
                return res.render('detalleProducto', {productos,  toThousand})
            })
            .catch(error=>{
                console.log(error);
                res.send(500);
            })
    },

    edit: (req,res) => {
        const autores = db.Autores.findAll();
        const categorias = db.Categorias.findAll();
        Promise.all([autores,categorias])
        .then(([autores,categorias]) =>{

            db.Productos.findByPk(req.params.id)
                .then(function(productos){
                    res.render('editarProducto', {productos, toThousand, autores, categorias})
                })    
        })
        .catch(error => res.send(error));

    },

    update: (req,res) => {

        db.Productos.update({
            title: req.body.title,
            id_author: req.body.author,
            id_category: req.body.category,
            price: Number(req.body.price),
            description: req.body.description,
            date_entry: req.body.date_entry,
			image: req.file ? req.file.filename : req.body.oldImage
        },
        {
            where: {id: req.params.id}
        })
            .then(producto => {
                res.redirect('/products/admin');
            })
            .catch(error=>{
                console.log(error);
                res.send(500);
            })                              

    },
    delete: (req,res) => {

        db.Productos.findByPk(req.params.id)
            .then(function(producto){
                res.render('eliminarProducto', {producto})
            })
            .catch(error=>{
                console.log(error);
                res.send(500);
            })

    },
    
    destroy: (req, res) => {
        db.Productos.destroy({
            where: {id: req.params.id}
        })
        .then(producto => {
            res.redirect('/products/admin');
         })
        .catch(error=>{
            console.log(error);
            res.send(500);
        })
    },

    admin: (req, res) => {

        db.Productos.findAll()
            .then(function(productos){
                return res.render('admin', {productos})
            })
            .catch(error=>{
                console.log(error);
                    res.send(500);
            })

    },

    search: (req, res) => {
        db.Productos.findAll({
            where: {
                title:    {[Op.like]: `%${req.query.search}%`}
            }
        })
        .then(function(productos){
            res.render('admin', {productos})
        })
        .catch(error=> {
            console.log(error)
            res.send(500);
        })
    },

    carrito: (req,res) => {
        // const producto = db.Productos.findAll();
        // const autor = db.Autores.findAll();
        // const usuario = db.Usuarios.findAll();
        // Promise.all([producto, autor, usuario])
        // .then(([producto, autor, usuario]) =>{
        //     db.Carrito.findAll({
        //         where: {id_user: 5}
        //     })
        //     .then(function(carrito){
        //         return res.render('carrito', {carrito, producto, autor, usuario, toThousand})
        //     })
        //     .catch(error=>{
        //         console.log(error);
        //             res.send(500);
        //     })
        // })
        const requireId = req.params.id;
        const requiredProduct = products.find((prod) => {
            const igual = prod.id == requireId;
            return igual;
        });
        res.render('carrito', {products, toThousand});
    }

}


module.exports = productController;