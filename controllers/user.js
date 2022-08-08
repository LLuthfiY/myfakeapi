const { User } = require('../models/user.js');

const getAll = async (req, res) => {
    User.findAll().then(users => {
        res.json(users);
    }
    ).catch(err => {
        res.status(400).json(err);
    }
    );
}

const getOne = async (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
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

const create = async (req, res) => {
    User.create({
        createdAt: Date.now().valueOf(),
        ...req.body
    }).then(user => {
        res.json(user);
    }
    ).catch(err => {
        res.status(400).json(err);
    }
    );
}

const update = async (req, res) => {
    User.update({
        updatedAt: Date.now().valueOf(),
        ...req.body
    }, {
        where: {
            id: req.params.id
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

const remove = async (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
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
    getAll,
    getOne,
    create,
    update,
    remove
}
