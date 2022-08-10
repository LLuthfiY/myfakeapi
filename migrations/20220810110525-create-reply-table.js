'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('replies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_comment: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      content: {
        type: Sequelize.STRING,
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
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('replies');
  }
};
