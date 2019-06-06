module.exports = function(sequelize, DataTypes) {
  var NewsPrefs = sequelize.define("NewsPrefs", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 50]
    }
  });
  NewsPrefs.associate = function(models) {
    models.NewsPrefs.belongsTo(models.Users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: true
      }
    });
  };
  return NewsPrefs;
};
