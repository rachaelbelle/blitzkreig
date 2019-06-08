'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 50]
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 50]
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 50]
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [15, 75]
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [5, 30]
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [5, 5]
    },
    weather: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    news: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    traffic: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    quotes: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {});
  // User.associate = function(models) {
  //   // associations can be defined here
  // };
  return users;
};