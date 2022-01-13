const db = require('../database/models');
const { Op } = require('sequelize');


const authorsController = {

    list: (req, res) => {

        db.Autores.findAll()
            .then(function(autores){
                return res.render('autores', {autores})
            })
            .catch(error=>{
                console.log(error);
                    res.send(500);
            })
    },

    search: (req, res) => {
        db.Autores.findAll({
            where: {
                name:    {[Op.like]: `%${req.query.search}%`}
            }
        })
        .then(function(autores){
            res.render('autores', {autores})
        })
        .catch(error=> {
            console.log(error)
            res.send(500);
        })
    },

    create: (req,res) => {

        db.Autores.findByPk(req.params.id)
            .then(function(autores){
                res.render('agregarAutor', {autores})
        })    
        
        .catch(error=>{
            console.log(error);
                res.send(500);
        })
    },

    store: (req,res) => {

        db.Autores.create({
            name: req.body.name
        })
            .then(autores => {
                res.redirect('/authors/admin');
            })
            .catch(error=>{
                console.log(error);
                res.send(500);
            })
    },

    edit: (req,res) => {

        db.Autores.findByPk(req.params.id)
            .then(function(autores){
            res.render('editarAutor', {autores})
        })    
        
        .catch(error=>{
            console.log(error);
                res.send(500);
        })

    },

    update: (req,res) => {

        db.Autores.update({
            name: req.body.name
        },
        {
            where: {id: req.params.id}
        })
            .then(autores => {
                res.redirect('/authors/admin');
            })
            .catch(error=>{
                console.log(error);
                res.send(500);
            })                              

    },
    delete: (req,res) => {

        db.Autores.findByPk(req.params.id)
            .then(function(autores){
                res.render('eliminarAutor', {autores})
            })
            .catch(error=>{
                console.log(error);
                res.send(500);
            })

    },
    
    destroy: (req, res) => {
        db.Autores.destroy({
            where: {id: req.params.id}
        })
        .then(autores => {
            res.redirect('/authors/admin');
         })
        .catch(error=>{
            console.log(error);
            res.send(500);
        })
    } 
}

module.exports = authorsController;