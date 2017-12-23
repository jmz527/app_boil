'use strict';
module.exports = (sequelize, DataTypes) => {
  var YtsChannel = sequelize.define('YtsChannel', {
    channel: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.YtsChannel.hasMany(models.Yt);
        models.YtsChannel.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return YtsChannel;
};