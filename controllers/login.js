const { User } = require('../models/user.js');

const login = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(username, password);
    User.findOne({
        where: {
            username: username,
            password: password
        }
    }).then(user => {
        if (user) { res.json(user); }
        else { res.status(400).json(err); }
    }
    ).catch(err => {
        res.status(400).json(err);
    }
    );
}

module.exports = {
    login
}