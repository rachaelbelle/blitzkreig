'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('People', [{
        firstName: "John",
        lastName:"Doe",
        username:"johndoe25",
        email:"jondoe@gmail.com",
        password:"********",
        isBetaMember: false
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
