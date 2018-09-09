'use strict';

const users = [
  {
    id: 1,
    rut: '40215247-8',
    name: 'Alonso Salas Admin',
    email: 'alosalasv@gmail.com',
    type_id: 1
  },
  {
    id: 2,
    rut: '26429531-9',
    name: 'Alonso Salas Regular',
    email: 'alonso_salas182@hotmail.com',
    type_id: 2
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    const usersIds = users.map(user => user.id);
    return queryInterface.bulkDelete('Users', [{
      id: usersIds
    }]);
  }
};
