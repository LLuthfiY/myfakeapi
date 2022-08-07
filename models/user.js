import { db as DB } from '../models/config.js';
import { Model, DataTypes } from 'sequelize';

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    sequelize: DB,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
});


export { User };