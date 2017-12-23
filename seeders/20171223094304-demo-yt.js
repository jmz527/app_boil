'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Yts', [
      {
          "id": "MUWUHf-rzks",
          "ChannelId": 0,
          "title": "How to Make an Elephant Explode with Science – The Size of Life 2",
          "href": "https://www.youtube.com/watch?v=MUWUHf-rzks",
          "duration": 485000,
          "views": 1598711,
          "active": true,
          "watched": false
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Yts', null, {});
  }
};
