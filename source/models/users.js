'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    rut: DataTypes.STRING,
    name: DataTypes.STRING,
    type_id: DataTypes.INTEGER
  }, {});
  Users.associate = function (models) {
    // associations can be defined here
  };
  return Users;
};