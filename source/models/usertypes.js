'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTypes = sequelize.define('UserTypes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  UserTypes.associate = function (models) {
    // associations can be defined here
  };
  return UserTypes;
};