function userNavBarMiddleware (req, res, next) {

    res.locals.isLogged = false;

    if(req.session && req.session.userLogin){
        res.locals.isLogged = true;
    }

    next();
}

module.exports = userNavBarMiddleware;