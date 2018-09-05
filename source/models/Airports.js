import Sequelize from 'sequelize';
import database from '../config/db';

const Airport = database.sequelize.define('airport', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: Sequelize.STRING,
    IATA: Sequelize.STRING
}, {
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

// Airport.belongsTo(ServiceOrder, {foreignKey: 'co_os'});

export default Airport;
