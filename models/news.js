module.exports = function(sequelize, DataTypes) {
  var News_prefs = sequelize.define("News_prefs", {
    first_name: {
      type:DataTypes.STRING,
      allowNull:false,
      len:[1,50]
    },
  });
  News_prefs.associate = function (models) {
    models.News_prefs.belongsTo(models.Users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: true
      }
    });
  }
  return News_prefs;
};
