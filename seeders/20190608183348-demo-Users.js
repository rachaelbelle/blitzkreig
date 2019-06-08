'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      
      return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName:"Doe",
        email:"johndoe@gmail.com",
        password:"********",
        isBetaMember: false
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};