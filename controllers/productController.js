const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {

    index: (req,res) => {

        res.render('productos', {products, toThousand});

    },

    create: (req,res) => {
        
        res.render('agregarProducto', {products});
    },

    store: (req,res) => {
		const newProduct = {
		
			id : products[products.length-1].id + 1, 
			name: req.body.name,
            autor: req.body.autor,
            price: Number(req.body.price),
            category: req.body.category,
            description: req.body.sinopsis,
			image: req.file ? req.file.filename : '',
            novedad: true,
            ventas: 50
			};
		
		products.push(newProduct);

		fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '));
		

		res.redirect('/products');        
    }, 

    detail: (req,res) => {
        const requireId = req.params.id;
        const requiredProduct = products.find((prod) => {
            return prod.id == requireId;
        });

        res.render('detalleProducto', {products: requiredProduct, toThousand});

    },

    edit: (req,res) => {
		const editProduct =  products.find((prod) => {
            return prod.id == req.params.id;
            });

       res.render('editarProducto', {editProduct, toThousand});
    },

    update: (req,res) => {

		const editedProduct =  products.find((prod) => {
            return prod.id == req.params.id;
            });
console.log(editedProduct.id);
            const prodIndex = products.findIndex((p) => p.id == editedProduct.id);
    console.log(prodIndex);
    
            const updatedProduct = {
                id: editedProduct.id,
                name: req.body.name,
                autor: req.body.autor,
                price: Number(req.body.price),
                category: req.body.category,
                description: req.body.sinopsis,
                image: req.file ? req.file.filename : editedProduct.image,
                novedad: true,
                ventas: 50
    
            };

            
            products[prodIndex] = updatedProduct;
    
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    
            res.redirect('/products');
    },
    delete: (req,res) => {
		const deletedProduct =  products.find((prod) => {
			return prod.id == req.params.id;
			});

		const prodIndex = products.findIndex((p) => p.id == deletedProduct.id);
		
		products.splice(prodIndex,1);

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		res.redirect('/products');
    },
    
    carrito: (req,res) => {
        const requireId = req.params.id;
        const requiredProduct = products.find((prod) => {
            const igual = prod.id == requireId;
            return igual;
        });
        res.render('carrito', {products, toThousand});
    }

}


module.exports = productController;