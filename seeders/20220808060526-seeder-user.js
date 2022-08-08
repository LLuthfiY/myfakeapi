'use strict';
// import { randFullName, randUserName, randNumber, randEmail } from '@ngneat/falso';
const { randFullName, randUserName, randNumber, randEmail } = require('@ngneat/falso');

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
    let users = [];
    for (let i = 0; i < 100; i++) {
      users.push({
        name: randFullName(),
        username: randUserName(),
        email: randEmail(),
        password: 'password',
        age: randNumber(18, 60),
        createdAt: new Date().valueOf(),
        updatedAt: new Date().valueOf()
      });
    }

    await queryInterface.bulkInsert('users', users, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
