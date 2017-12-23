'use strict';
module.exports = (sequelize, DataTypes) => {
  var RdtUser = sequelize.define('RdtUser', {
    user: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.RdtUser.hasMany(models.RdtUp);
        models.RdtUser.hasMany(models.RdtDown);
        models.RdtUser.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return RdtUser;
};