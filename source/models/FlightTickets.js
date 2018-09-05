import Sequelize from 'sequelize';
import database from '../config/db';

const FlightTicket = database.sequelize.define('flight_ticket', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    id_booking: Sequelize.INTEGER,
    passenger_name: Sequelize.STRING,
    active: Sequelize.BOOLEAN,
    passenger_rut: Sequelize.STRING
}, {
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

// FlightTicket.belongsTo(ServiceOrder, {foreignKey: 'co_os'});

export default FlightTicket;
