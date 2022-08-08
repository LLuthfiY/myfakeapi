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
  });

}

let down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('users');
}


export { up, down };