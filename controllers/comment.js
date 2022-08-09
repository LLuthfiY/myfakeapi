const { Comment } = require('../models/models.js');

const getAll = async (req, res) => {
    Comment.findAll({
        include: [{
            association: Comment.Article,
        },
        {
            association: Comment.User,
        }]


    }).then(comments => {
        res.json(comments);
    }
    ).catch(err => {
        res.status(400).json(err);
    }
    );
}

const getOne = async (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            association: Comment.Article,
        },
        {
            association: Comment.User,
        }]
    }).then(comment => {
        if (comment) { res.json(comment); }
        else {
            res.status(400).json({
                message: 'Comment not found'
            });
        }
    }
    ).catch(err => {
        res.status(400).json(err);
    }
    );
}

const create = async (req, res) => {
    Comment.create({
        createdAt: Date.now().valueOf(),
        ...req.body
    }).then(comment => {
        res.json(comment);
    }
    ).catch(err => {
        res.status(400).json(err);
    }
    );
}

const update = async (req, res) => {
    Comment.update({
        updatedAt: Date.now().valueOf(),
        ...req.body
    }, {
        where: {
            id: req.params.id
        }
        ,
        include: [{
            association: Comment.Article,
        },
        {
            association: Comment.User,
        }]
    }).then(comment => {
        if (comment) { res.json(comment); }
        else {
            res.status(400).json({
                message: 'Comment not found'
            });
        }
    }
    ).catch(err => {
        res.status(400).json(err);
    }
    );
}

const remove = async (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(comment => {
        if (comment) { res.json(comment); }
        else {
            res.status(400).json({
                message: 'Comment not found'
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
    remove
}