module.exports = function (sequelize, DataTypes) {
  var NewsPrefs = sequelize.define("NewsPrefs", {
  countryPref: {
  type: DataTypes.STRING,
  allowNull: true,
  defaultValue: "us",
  len: [1, 50],
  }
  });
  NewsPrefs.associate = function (models) {
  models.NewsPrefs.belongsTo(models.Users, {
  onDelete: "CASCADE",
  foreignKey: {
  allowNull: true
  }
  });
<<<<<<< HEAD
  // NewsPrefs.associate = function(models) {
  //   models.NewsPrefs.belongsTo(models.Users, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   });
  // };
=======
  };
>>>>>>> f1e8596577af11a9cd8b760f68aa7f0aca032e79
  return NewsPrefs;
  };
  
