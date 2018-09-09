'use strict';

const aircrafts = [
  {
    id: 1,
    matriculation: 'AIRCRAFT1',
  },
  {
    id: 2,
    matriculation: 'AIRCRAFT2',
  },
  {
    id: 3,
    matriculation: 'AIRCRAFT3',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Aircrafts', aircrafts, {});

  },

  down: (queryInterface, Sequelize) => {
    const aircraftsIds = aircrafts.map(aircraft => aircraft.id);
    return queryInterface.bulkDelete('Aircrafts', [{
      id: aircraftsIds
    }]);
  }
};
