'use strict';
const { randText, randNumber } = require('@ngneat/falso');


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
    let comments = [];
    for (let i = 0; i < 100; i++) {
      comments.push({
        id_article: randNumber({
          min: 1,
          max: 100,
        }),
        id_user: randNumber({
          min: 1,
          max: 100,
        }),
        content: randText({ charCount: 200 }),
        createdAt: new Date().valueOf(),
        updatedAt: new Date().valueOf()
      });
    }
    await queryInterface.bulkInsert('comments', comments, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('comments', null, {});
  }
};
