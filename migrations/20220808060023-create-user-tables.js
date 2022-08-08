'use strict';


let up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: Date.now().valueOf()
    },
    updatedAt: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: Date.now().valueOf()
    }
  });

}

let down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('users');
}


module.exports = { up, down };