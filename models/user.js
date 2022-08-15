
const { db } = require('../models/config.js');
const { Model, DataTypes } = require('sequelize');
// const { Article } = require('./article.js');


class User extends Model { }

User.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
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
    modelName: 'User',
    tableName: 'users',
    timestamps: false
});

module.exports = { User };