'use strict';
module.exports = (sequelize, DataTypes) => {
  var RdtUp = sequelize.define('RdtUp', {
    user_ref: DataTypes.STRING,
    rdt_ref: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.RdtUp.belongsTo(models.RdtUser, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
        models.RdtUp.belongsTo(models.Rdt, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return RdtUp;
};