'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('YtsChannel', [
      { "id": 0, "UserId": 101, "channel": "kurzgesagt", "url": "UCsXVk37bltHxD1rDPwtNM8Q", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('YtsChannel', null, {});
  }
};
