const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require('../database/models');
const { Op } = require('sequelize');

const mainController = {
    index: (req,res) => { 
        const novedad = db.Productos.findAll({
            where: {
                title: {[Op.gte]: '2022-01-01'}
            },
            limit: 8
        });
        const elegidos = db.Productos.findAll({
            where: {
                price: {[Op.lt]: 2000}
            },
            limit: 4
        });
        Promise.all([novedad, elegidos])
        .then(([novedad, elegidos]) =>{
            res.render('home', {novedad, elegidos, toThousand})
        })
        .catch(error=> {
            console.log(error)
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
            res.render('productos', {productos, toThousand})
        })
        .catch(error=> {
            console.log(error)
            res.send(500);
        })
    }
    
}

module.exports = mainController;