'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Bookings', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    user_id: DataTypes.INTEGER,
    flight_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  },{});
  Bookings.associate = function (models) {
    Bookings.belongsTo(models.Flights, {
      foreignKey: 'flight_id'
    });
  };


  return Bookings;
};