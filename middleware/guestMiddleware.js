function guestMiddleware(req, res, next) {
    if(req.session.userLogin){
        res.redirect('/user/profile');
    }
next();
}
module.exports = guestMiddleware;