// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var House = require("./house.js");
var User = require("./user.js");

// Creates a "Book" model that matches up with DB
var Appointments = sequelize.define("appointments", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  ownerUserId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'userId'
    }
  },
  houseId: {
    type: Sequelize.INTEGER,
    references: {
      model: House,
      key: 'houseId'
    }
  },
  apptDate: Sequelize.DATEONLY,
  apptime: Sequelize.TIME,
  renterUserId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'userId'
    }
  }
}, {
	tableName: 'appointments',
	timestamps: false
});

// Syncs with DB
Appointments.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Appointments;