const fs = require('fs');

function logMiddleware (req, res, next){

    fs.appendFileSync('./logs/logs_visitas.txt', 'Se ingresó en la página: ' + req.url + '\n');

    next();
};

module.exports = logMiddleware;