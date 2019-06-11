module.exports = function (sequelize, DataTypes) {
  var NewsPrefs = sequelize.define("NewsPrefs", {
    countryPref: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "us",
<<<<<<< HEAD
      len: [1, 50],
    }
  });
  NewsPrefs.associate = function (models) {
    models.NewsPrefs.belongsTo(models.Users, {
=======
      len: [1, 50]
    }
  });
  NewsPrefs.associate = function(models) {
    NewsPrefs.belongsTo(models.users, {
>>>>>>> c693144ffd823d05ea11c4de82d0f03fa2e4748f
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: true
      }
    });
    // NewsPrefs.associate = function(models) {
    //   models.NewsPrefs.belongsTo(models.Users, {
    //     onDelete: "CASCADE",
    //     foreignKey: {
    //       allowNull: true
    //     }
    //   });
    // };s
  };
  return NewsPrefs;
};