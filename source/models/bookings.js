'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Bookings', {
    id: { type: DataTypes.INTEGER, primaryKey: true},
    user_id: DataTypes.INTEGER,
    flight_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    retired: { type: DataTypes.BOOLEAN, default: false },
    active: { type: DataTypes.BOOLEAN, default: true }
  },{});
  Bookings.associate = function (models) {
    Bookings.belongsTo(models.Flights, {
      foreignKey: 'flight_id'
    });
  };


  return Bookings;
};