// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var User = require("./user.js");

// Creates a "Book" model that matches up with DB
var House = sequelize.define("house", {
  	houseId: {
  		type: Sequelize.INTEGER,
  		primaryKey: true,
  		autoIncrement: true,
  		allowNull: false
  	},
	// houseType: Sequelize.STRING,
	address1: Sequelize.STRING,
	address2: Sequelize.STRING,
	city: Sequelize.STRING,
	state: Sequelize.STRING,
	country: Sequelize.STRING,
	zipcode: Sequelize.BIGINT,
	yearBuilt: Sequelize.INTEGER,
	bedrooms: Sequelize.INTEGER,
	bathrooms: Sequelize.INTEGER,
	builtsqft: Sequelize.INTEGER,
	lotsqft: Sequelize.INTEGER,
	fee: Sequelize.INTEGER,
	rent: Sequelize.INTEGER,
	userId: {
		type: Sequelize.INTEGER,
		references: {
			model: User,
			key: 'userId'
		}
	}
}, {
	tableName: 'house',
	timestamps: false
});

// Syncs with DB
House.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = House;