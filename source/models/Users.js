import Sequelize from 'sequelize';
import database from '../config/db';

const User = database.sequelize.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    rut: Sequelize.STRING,
    name: Sequelize.STRING,
    type_id: Sequelize.INTEGER
}, {
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

// User.belongsTo(ServiceOrder, {foreignKey: 'co_os'});

export default User;
