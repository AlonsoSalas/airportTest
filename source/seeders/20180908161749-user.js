'use strict';

const users = [
  {
    id: 1,
    rut: '40215247-8',
    name: 'Alonso Salas Admin',
    type_id: 1
  },
  {
    id: 2,
    rut: '26429531-9',
    name: 'Alonso Salas Regular',
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
