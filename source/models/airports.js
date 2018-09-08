'use strict';
module.exports = (sequelize, DataTypes) => {
  const Airports = sequelize.define('Airports', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    IATA: DataTypes.STRING
  }, {});
  Airports.associate = function(models) {
    // associations can be defined here
  };
  return Airports;
};