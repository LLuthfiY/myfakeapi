import { User } from '../models/user.js';

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
        res.json(user);
    }
    ).catch(err => {
        res.status(400).json(err);
    }
    );
}

const create = async (req, res) => {
    User.create(req.body).then(user => {
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
        res.json(user);
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
        res.json(user);
    }
    ).catch(err => {
        res.status(400).json(err);
    }
    );
}

export { getAll, getOne, create, update, remove };
