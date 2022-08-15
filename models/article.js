const { db } = require('../models/config.js');
const { Model, DataTypes } = require('sequelize');
// const { User } = require('../models/user.js');



class Article extends Model { }

Article.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
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
    modelName: 'Article',
    tableName: 'articles',
    timestamps: false
});

module.exports = { Article };
