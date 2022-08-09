const { User } = require('../models/user.js');
const { Article } = require('../models/article.js');
const { Comment } = require('../models/comment.js');

// model User 
User.Articles = User.hasMany(Article, { foreignKey: 'id_user', as: 'Articles' });

// model Article
Article.User = Article.belongsTo(User, { foreignKey: 'id_user', as: 'User' });
Article.Comments = Article.hasMany(Comment, { foreignKey: 'id_article', as: 'Comments' });

// model Comment
Comment.Article = Comment.belongsTo(Article, { foreignKey: 'id_article', as: 'Article' });
Comment.User = Comment.belongsTo(User, { foreignKey: 'id_user', as: 'User' });


module.exports = { User, Article, Comment };