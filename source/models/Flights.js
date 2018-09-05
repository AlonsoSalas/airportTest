import Sequelize from 'sequelize';
import database from '../config/db';

const Flight = database.sequelize.define('flights', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    id_aircraft: Sequelize.INTEGER,
    departure_airport_id: Sequelize.INTEGER,
    arrival_airport_id: Sequelize.INTEGER,
    departure_date: Sequelize.DATE,
    arrival_date: Sequelize.DATE,
    stock: Sequelize.INTEGER,
    price: Sequelize.FLOAT
}, {
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

// Flight.belongsTo(ServiceOrder, {foreignKey: 'co_os'});

export default Flight;
