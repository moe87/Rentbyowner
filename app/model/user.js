// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var User = sequelize.define("user", {
  userId: {
  	type: Sequelize.INTEGER,
  	field: 'userId',
  	primaryKey: true,
  	autoIncrement: true,
  	allowNull: false
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  phone: Sequelize.BIGINT,
  email: { type: Sequelize.STRING, unique: true },
  password: Sequelize.STRING
}, {
	tableName: 'user',
	timestamps: false
});

// Syncs with DB
User.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = User;