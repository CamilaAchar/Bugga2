const express = require('express');
const app = express();

const rutasMain = require('./routes/mainRouter');
const rutasProductos = require('./routes/products');

const logMiddleware = require('./middleware/logUser');

const methodOverride =  require('method-override');

app.use(logMiddleware);


app.use(methodOverride('_method')); 

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use('/', rutasMain);
app.use('/products', rutasProductos);

app.use((req,res,next)=>{
    res.status(404).render('error404');
  });

app.listen(process.env.PORT || 3010, function () { console.log('Servidor OK - bugga2 - puerto 3010')});




