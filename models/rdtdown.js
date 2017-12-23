'use strict';
module.exports = (sequelize, DataTypes) => {
  var RdtDown = sequelize.define('RdtDown', {
    user_ref: DataTypes.STRING,
    rdt_ref: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.RdtDown.belongsTo(models.RdtUser, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
        models.RdtDown.belongsTo(models.Rdt, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return RdtDown;
};