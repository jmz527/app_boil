'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rdt = sequelize.define('Rdt', {
    full_name: DataTypes.STRING,
    title: DataTypes.STRING,
    href: DataTypes.STRING,
    author: DataTypes.STRING,
    subreddit: DataTypes.STRING,
    url: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.Rdt.hasMany(models.RdtUp);
        models.Rdt.hasMany(models.RdtDown);
      }
    }
  });
  return Rdt;
};