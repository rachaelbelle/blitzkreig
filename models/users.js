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
  });

  // This associates the User to their News preferences
  Users.associate = function(models) {
    models.Users.hasOne(models.NewsPrefs, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Users;
};
