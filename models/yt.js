'use strict';
module.exports = (sequelize, DataTypes) => {
  var Yt = sequelize.define('Yt', {
    title: DataTypes.STRING,
    href: DataTypes.STRING,
    dur: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    watched: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        models.Yt.belongsTo(models.YtsChannel, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Yt;
};