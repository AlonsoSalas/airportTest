'use strict';

const airports = [
  {
    id: 1,
    name: 'Aeropuerto Internacional de Maiquetía Simón Bolívar',
    IATA: 'CSS'
  },
  {
    id: 2,
    name: 'Aeropuerto Internacional Comodoro Arturo Merino Benítez',
    IATA: 'SCL'
  },
  {
    id: 3,
    name: 'Aeropuerto Internacional de São Paulo-Guarulhos',
    IATA: 'GRU'
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Airports', airports, {});
  },

  down: (queryInterface, Sequelize) => {
    const airportsIds = airports.map(airport => airport.id);
    return queryInterface.bulkDelete('Airports', [{
      id: airportsIds
    }]);
  }
};
