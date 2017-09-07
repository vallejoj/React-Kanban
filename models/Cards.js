module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define("Card", {

     title: DataTypes.STRING,
      description: DataTypes.STRING,
    priority: DataTypes.STRING,
    progress: DataTypes.STRING,


  },

   {
    classMethods: {
      associate: function(models) {
      }
    }
  });

  return Card;
};
