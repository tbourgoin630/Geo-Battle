// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("battler_db", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
<<<<<<< HEAD
  password: "Handwall5302",
=======
  password: "Thunder1",
>>>>>>> 41fdd04c2f9488113815ac704a878b8ff7ef434b
  database: "battler_db",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
