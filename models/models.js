const { User } = require('../models/user.js');
const { Article } = require('../models/article.js');

User.Articles = User.hasMany(Article, { foreignKey: 'id_user', as: 'Articles' });
Article.User = Article.belongsTo(User, { foreignKey: 'id_user', as: 'User' });

module.exports = { User, Article };