import Sequelize from 'sequelize';
import database from '../config/db';

const Aircraft = database.sequelize.define('aircraft', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    matriculation: Sequelize.STRING
}, {
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

// Aircraft.belongsTo(ServiceOrder, {foreignKey: 'co_os'});

export default Aircraft;
