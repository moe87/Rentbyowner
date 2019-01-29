// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

var sequelize;
if(process.env..JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dailect: "mysql",
    logging: true
  });
} else {
  sequelize = new Sequelize("rentbyowner", "rentbyowner", "rentbyowner", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
     max: 5,
     min: 0,
     idle: 10000
    }
  });
}

// Exports the connection for other files to use
module.exports = sequelize;
