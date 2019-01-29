// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var House = require("./house.js");

// Creates a "Book" model that matches up with DB
var HouseImages = sequelize.define("houseImages", {
  houseId: {
    type: Sequelize.INTEGER,
    references: {
      model: House,
      key: 'houseId'
    }
  },
  image1: Sequelize.BLOB,
  image2: Sequelize.BLOB,
  image3: Sequelize.BLOB,
  image4: Sequelize.BLOB
}, {
	tableName: 'houseImages',
	timestamps: false
});

HouseImages.removeAttribute('id');

// Syncs with DB
HouseImages.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = HouseImages;