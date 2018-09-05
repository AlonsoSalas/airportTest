import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

let { DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

console.log({
	'DB_HOST': DB_HOST,	
	'DB_DATABASE': DB_DATABASE,
	'DB_USERNAME': DB_USERNAME,
	'DB_PASSWOR': DB_PASSWORD
});

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
	host: DB_HOST,
	dialect: 'mysql',

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
});

const db = {
	sequelize : sequelize,
	Sequelize : Sequelize
};

module.exports = db;
