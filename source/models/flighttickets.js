'use strict';
module.exports = (sequelize, DataTypes) => {
  const FlightTickets = sequelize.define('FlightTickets', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    id_booking: DataTypes.INTEGER,
    passenger_name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    passenger_rut: DataTypes.STRING
  }, {});
  FlightTickets.associate = function(models) {
    // associations can be defined here
  };
  return FlightTickets;
};