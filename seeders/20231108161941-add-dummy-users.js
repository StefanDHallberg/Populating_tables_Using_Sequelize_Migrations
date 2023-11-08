'use strict';

const faker = require('faker');


//Run this command to generate the dummy users::  sequelize db:seed:all
//Or If you haven't installed Sequelize CLI globally:: npx sequelize-cli db:seed:all

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dummyUsers = [];
    for (let i = 0; i < 75; i++) { // generates 75 dummy users to fill the http://localhost:3000/users page.
      dummyUsers.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Users', dummyUsers);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
