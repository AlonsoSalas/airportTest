import Sequelize from 'sequelize';
import database from '../config/db';

const Booking = database.sequelize.define('booking', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    user_id:Sequelize.INTEGER,
    flight_id: Sequelize.INTEGER,
    date: Sequelize.DATE,
    active: Sequelize.BOOLEAN,
    tickets_quantity: Sequelize.INTEGER
}, {
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

// Booking.belongsTo(ServiceOrder, {foreignKey: 'co_os'});

export default Booking;
