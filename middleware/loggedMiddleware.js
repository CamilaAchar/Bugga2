function loggedMiddleware(req, res, next){
    if(!req.session.userLogin){
        res.redirect('/user/login');
    }
    next();
}
module.exports = loggedMiddleware;