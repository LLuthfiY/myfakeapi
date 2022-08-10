const { db } = require('../models/config.js');
const { Model, DataTypes } = require('sequelize');

class Reply extends Model { }

Reply.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_comment: {
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
    modelName: 'Reply',
    tableName: 'replies',
    timestamps: false
});

module.exports = { Reply };
