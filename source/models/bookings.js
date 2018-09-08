'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Bookings', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    user_id:  DataTypes.INTEGER,
    flight_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    tickets_quantity: DataTypes.INTEGER
  }, {});
  Bookings.associate = function(models) {
    // associations can be defined here
  };
  return Bookings;
};