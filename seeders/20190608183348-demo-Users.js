"use strict";

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          password: "********",
          isBetaMember: false
        }
      ],
      {}
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
