'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('users', [{
       "firstName":"John",
       "lastName": "Doe",
        "username": "jdoe1996",
        "email": "jdoe@gmail.com",
        "password":"********",
        "zipCode": 56789,
        "weather": true,
        "news": true,
        "traffic": true,
        "quotes": true,
        "createdAt":new Date(),
        "updatedAt":new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
