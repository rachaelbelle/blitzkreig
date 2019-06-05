module.exports = function(sequelize, DataTypes) {
  var Newsprefs = sequelize.define("Newsprefs", {
    country: {
      type:DataTypes.STRING,
      allowNull:false,
      len:[1,50]
    },
  });
  Newsprefs.associate = function (models) {
    models.Newsprefs.belongsTo(models.Users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: true
      }
    });
  }
  return Newsprefs;
};
