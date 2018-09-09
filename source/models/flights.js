'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flights = sequelize.define('Flights', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    id_aircraft: DataTypes.INTEGER,
    departure_airport_id: DataTypes.INTEGER,
    arrival_airport_id: DataTypes.INTEGER,
    departure_date: DataTypes.DATE,
    arrival_date: DataTypes.DATE,
    stock: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {});
  Flights.associate = function (models) {
    // associations can be defined here
  };
  return Flights;
};