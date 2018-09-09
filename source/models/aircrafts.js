'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aircrafts = sequelize.define('Aircrafts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    matriculation: DataTypes.STRING
  }, {});
  Aircrafts.associate = function (models) {
    Aircrafts.hasMany(models.Flights, {
      foreignKey: 'id_aircraft'
    });
  };
  return Aircrafts;
};