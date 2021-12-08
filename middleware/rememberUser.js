const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const usersReg = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function recordarMiddleware(req, res, next) {

    if (req.cookies.recordar != undefined && req.session.userLogin == undefined){

        let users;
        if (users == '') {
            users = [];
        } else {
            users = usersReg;
        }
        let userLog = [];
        for (let i = 0; i < users.length; i++){
            if (users[i].mail == req.cookies.recordar) {
                 userLog = users[i];
            }
        }  
        req.session.userLogin = userLog;
    }


    next();
}

module.exports = recordarMiddleware;