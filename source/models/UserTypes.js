import Sequelize from 'sequelize';
import database from '../config/db';

const UserType = database.sequelize.define('users_type', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
}, {
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

// UserType.belongsTo(ServiceOrder, {foreignKey: 'co_os'});

export default UserType;
