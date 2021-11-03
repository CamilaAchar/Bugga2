const express = require('express');
const app = express();

const rutasMain = require('./routes/mainRouter');
const rutasProductos = require('./routes/products');

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use('/', rutasMain);
app.use('/products', rutasProductos);


app.listen(process.env.PORT || 3010, function () { console.log('Servidor OK - bugga2 - puerto 3010')});




