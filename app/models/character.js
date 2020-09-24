// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Character = sequelize.define("character", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the character (a string)
  name: Sequelize.STRING,
  //hitpoints
  hitPoints: Sequelize.INTEGER,
  //for healing between battles mayber
  //current HP
  //currentHp: Sequelize.INTEGER,
  //max HP
  //maxHp: Sequelize.INTEGER
  //attack
  attack: Sequelize.INTEGER,
  //defense
  defense: Sequelize.INTEGER,
  //speed
  speed: Sequelize.INTEGER,
  //damage
  damage: Sequelize.INTEGER,
  
  // and the character's force points (an int)
  //forcePoints: Sequelize.INTEGER
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
