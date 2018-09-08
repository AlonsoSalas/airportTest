'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aircrafts = sequelize.define('Aircrafts', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    matrication: DataTypes.STRING
  }, {});
  Aircrafts.associate = function(models) {
    // associations can be defined here
  };
  return Aircrafts;
};