'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let replies = [];
    for (let i = 0; i < 100; i++) {
      replies.push({
        id_comment: i,
        id_user: i,
        content: 'Reply ' + i,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('replies', replies, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('replies', null, {});
  }
};
