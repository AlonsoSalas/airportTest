'use strict';

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const afterTomorrow = new Date();
afterTomorrow.setDate(afterTomorrow.getDate() + 2);
const twoDaysAfterTomorrow = new Date();
twoDaysAfterTomorrow.setDate(twoDaysAfterTomorrow.getDate() + 3);

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
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Flights', flights, {});
  },

  down: (queryInterface, Sequelize) => {
    const flightsIds = flights.map(flight => flight.id);
    return queryInterface.bulkDelete('Flights', [{
      id: flightsIds
    }]);
  }
};
