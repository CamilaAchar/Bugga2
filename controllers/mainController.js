const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const mainController = {
    index: (req,res) => { 
        const novedad = products.filter((prod) => prod.novedad == true);
        const masElegidos = products.filter((prod) => prod.ventas == 100);

        res.render('home', {novedad, masElegidos, toThousand});
    }
    
}

module.exports = mainController;