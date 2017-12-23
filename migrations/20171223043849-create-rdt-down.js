'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RdtDowns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_ref: {
        type: Sequelize.STRING
      },
      rdt_ref: {
        type: Sequelize.STRING
      },
      RdtUserId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'RdtUsers',
          key: 'id'
        }
      },
      RdtId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Rdts',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RdtDowns');
  }
};