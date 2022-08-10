const { Reply } = require('../models/models.js');

const getAll = async (req, res) => {
    Reply.findAll({
        include: [{
            association: Reply.Comment,
        },
        {
            association: Reply.User,
        }]

    }).then(replies => {
        res.json(replies);
    }
    ).catch(err => {
        res.status(400).json(err);
    }
    );
}

const getOne = async (req, res) => {
    Reply.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            association: Reply.Comment,
        },
        {
            association: Reply.User,
        }]
    }).then(replies => {
        if (replies) { res.json(replies); }
        else {
            res.status(400).json({
                message: 'Reply not found'
            });
        }
    }
    ).catch(err => {
        res.status(400).json(err);
    }
    );
}

const create = async (req, res) => {
    Reply.create({
        createdAt: Date.now().valueOf(),
        ...req.body
    }).then(replies => {
        res.json(replies);
    }
    ).catch(err => {
        res.status(400).json(err);
    }
    );
}

const update = async (req, res) => {
    Reply.update({
        createdAt: Date.now().valueOf(),
        ...req.body
    }, {
        where: {
            id: req.params.id
        }
    }).then(replies => {
        if (replies) { res.json(replies); }
        else {
            res.status(400).json({
                message: 'Reply not found'
            });
        }
    }
    ).catch(err => {
        res.status(400).json(err);
    }
    );
}

const deleteOne = async (req, res) => {
    Reply.destroy({
        where: {
            id: req.params.id
        }
    }).then(replies => {
        if (replies) { res.json(replies); }
        else {
            res.status(400).json({
                message: 'Reply not found'
            });
        }
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
    deleteOne
}