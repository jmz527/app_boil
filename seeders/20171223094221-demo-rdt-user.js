'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RdtUser', [
      { "id": 0, "UserId": 101, "user": "jmz527", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('RdtUser', null, {});
  }
};
