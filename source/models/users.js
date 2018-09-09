'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    rut: DataTypes.STRING,
    name: DataTypes.STRING,
    type_id: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {});
  Users.associate = function (models) {
    Users.belongsTo(models.UserTypes, {
      foreignKey: 'type_id',
      as: 'Rol'
    });
  };
  return Users;
}; 