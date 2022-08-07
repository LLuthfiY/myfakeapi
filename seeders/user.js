import { Sequelize } from "sequelize";
import falso from "falso";


const db = new Sequelize({
    dialect: 'sqlite',
    storage: "./database/database.sqlite" // path from root of project
});
