const { db } = require('../models/config.js');
const { Model, DataTypes } = require('sequelize');

class Comment extends Model { }

Comment.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_article: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: Date.now().valueOf()
    },
    updatedAt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: Date.now().valueOf()
    }
}, {
    sequelize: db,
    modelName: 'Comment',
    tableName: 'comments',
    timestamps: false
});

module.exports = { Comment };