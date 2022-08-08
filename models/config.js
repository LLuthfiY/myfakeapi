const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: "./database/database.sqlite" // path from root of project
});

module.exports = { db };