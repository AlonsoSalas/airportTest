'use strict';
const moment = require('moment');

const tomorrow = moment().utc().add(1, 'days').format('YYYY/MM/DD HH:mm:ss')
const afterTomorrow = moment().utc().add(2, 'days').format('YYYY/MM/DD HH:mm:ss')
const twoDaysAfterTomorrow = moment().utc().add(3, 'days').format('YYYY/MM/DD HH:mm:ss')

const flights = [
  {
    id: 1,
    id_aircraft: 1,
    departure_airport_id: 1,
    arrival_airport_id: 2,
    departure_date: tomorrow,
    arrival_date: afterTomorrow,
    stock: 100,
    price: 200
  },
  {
    id: 2,
    id_aircraft: 1,
    departure_airport_id: 2,
    arrival_airport_id: 1,
    departure_date: afterTomorrow,
    arrival_date: twoDaysAfterTomorrow,
    stock: 100,
    price: 200
  },
  {
    id: 3,
    id_aircraft: 2,
    departure_airport_id: 1,
    arrival_airport_id: 3,
    departure_date: tomorrow,
    arrival_date: afterTomorrow,
    stock: 100,
    price: 200
  },
  {
    id: 4,
    id_aircraft: 2,
    departure_airport_id: 3,
    arrival_airport_id: 1,
    departure_date: afterTomorrow,
    arrival_date: twoDaysAfterTomorrow,
    stock: 100,
    price: 200
  },
  {
    id: 5,
    id_aircraft: 3,
    departure_airport_id: 2,
    arrival_airport_id: 3,
    departure_date: tomorrow,
    arrival_date: afterTomorrow,
    stock: 100,
    price: 200
  },
  {
    id: 6,
    id_aircraft: 1,
    departure_airport_id: 3,
    arrival_airport_id: 2,
    departure_date: afterTomorrow,
    arrival_date: twoDaysAfterTomorrow,
    stock: 100,
    price: 200
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flights', flights, {});
  },

  down: (queryInterface, Sequelize) => {
    const flightsIds = flights.map(flight => flight.id);
    return queryInterface.bulkDelete('Flights', [{
      id: flightsIds
    }]);
  }
};
