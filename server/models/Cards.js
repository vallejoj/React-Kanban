module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define("Card", {

     title: DataTypes.STRING,
      description: DataTypes.STRING,
    priority: DataTypes.STRING,
    progress: DataTypes.STRING,
    created_at: Sequelize.DATE,
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });

  return Gallery;
};
