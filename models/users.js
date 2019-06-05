module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [15, 75]
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [5, 30]
    }
  });
  return Users;
};
