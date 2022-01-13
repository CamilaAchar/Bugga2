const db = require('../database/models');
const { Op } = require('sequelize');

const categorysController = {

    list: (req, res) => {

        db.Categorias.findAll()
            .then(function(categorias){
                return res.render('categorias', {categorias})
            })
            .catch(error=>{
                console.log(error);
                    res.send(500);
            })
    },

    search: (req, res) => {
        db.Categorias.findAll({
            where: {
                name:    {[Op.like]: `%${req.query.search}%`}
            }
        })
        .then(function(categorias){
            res.render('categorias', {categorias})
        })
        .catch(error=> {
            console.log(error)
            res.send(500);
        })
    },


    create: (req,res) => {

        db.Categorias.findByPk(req.params.id)
            .then(function(categorias){
            res.render('agregarCategoria', {categorias})
        })    
        
        .catch(error=>{
            console.log(error);
                res.send(500);
        })
    },

    store: (req,res) => {

        db.Categorias.create({
            name: req.body.name
        })
            .then(categorias => {
                res.redirect('/categorys/admin');
            })
            .catch(error=>{
                console.log(error);
                res.send(500);
            })
    },

    edit: (req,res) => {

        db.Categorias.findByPk(req.params.id)
            .then(function(categorias){
            res.render('editarCategoria', {categorias})
        })    
        
        .catch(error=>{
            console.log(error);
                res.send(500);
        })

    },

    update: (req,res) => {

        db.Categorias.update({
            name: req.body.name
        },
        {
            where: {id: req.params.id}
        })
            .then(categorias => {
                res.redirect('/categorys/admin');
            })
            .catch(error=>{
                console.log(error);
                res.send(500);
            })                              

    },
    delete: (req,res) => {

        db.Categorias.findByPk(req.params.id)
            .then(function(categorias){
                res.render('eliminarCategoria', {categorias})
            })
            .catch(error=>{
                console.log(error);
                res.send(500);
            })

    },
    
    destroy: (req, res) => {
        db.Categorias.destroy({
            where: {id: req.params.id}
        })
        .then(categorias => {
            res.redirect('/categorys/admin');
         })
        .catch(error=>{
            console.log(error);
            res.send(500);
        })
    } 
}

module.exports = categorysController;