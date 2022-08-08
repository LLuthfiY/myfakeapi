const { Article } = require('../models/models.js');


module.exports = {
    getAllArticles: async (req, res) => {
        Article.findAll({
            include: [{
                association: Article.User,
            }]
        })
            .then(articles => {
                res.status(200).json(articles);
            }).catch(err => {
                res.status(500).json(err);
            });
    },

    getArticleById: async (req, res) => {
        Article.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                association: Article.User,
            }]
        })
            .then(article => {
                if (article) {
                    res.status(200).json(article);
                }
                else {
                    res.status(404).json({
                        message: 'Article not found'
                    });
                }
            }).catch(err => {
                res.status(500).json(err);
            });

    },
    createArticle: async (req, res) => {
        Article.create({
            id_user: req.body.id_user,
            title: req.body.title,
            content: req.body.content
        })
            .then(article => {
                res.status(201).json(article);
            }).catch(err => {
                res.status(500).json(err);
            });
    },
    updateArticle: async (req, res) => {
        Article.update({
            id_user: req.body.id_user,
            title: req.body.title,
            content: req.body.content
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(article => {
                if (article[0] === 1) {
                    res.status(200).json({
                        message: 'Article updated successfully'
                    });
                }
                else {
                    res.status(404).json({
                        message: 'Article not found'
                    });
                }
            }).catch(err => {
                res.status(500).json(err);
            });
    },
    deleteArticle: async (req, res) => {
        Article.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(article => {
                if (article === 1) {
                    res.status(200).json({
                        message: 'Article deleted successfully'
                    });
                }
                else {
                    res.status(404).json({
                        message: 'Article not found'
                    });
                }
            }).catch(err => {
                res.status(500).json(err);
            });
    }
}