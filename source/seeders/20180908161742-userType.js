'use strict';

const userTypes = [
  {
    id: 1,
    name: 'admin',
    description: 'administrator',
  },
  {
    id: 2,
    name: 'regular',
    description: 'regular client',
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserTypes', userTypes, {});
  },

  down: (queryInterface, Sequelize) => {
    const userTypesIds = userTypes.map(userType => userType.id);
    return queryInterface.bulkDelete('UserTypes', [{
      id: userTypesIds
    }]);
  }
};
