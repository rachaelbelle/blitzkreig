module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    first_name: {
      type:DataTypes.STRING,
      allowNull:false,
      len:[1,50]
    },
    last_name:{
      type:DataTypes.STRING,
      allowNull:false,
      len:[1,50]
    },
    email:{
     type: DataTypes.STRING,
     allowNull:false,
     len:[15,75]
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      len:[15,75]
    }
  });
  return Users;
};