// class Character {
//     constructor(name, hitPoints, attack, defense, speed, damage, player){
//     this.name = name;
//     this.hitPoints = hitPoints;
//     this.attack = attack;
//     this.defense = defense;
//     this.speed = speed;
//     this.damage = damage;
//     this.player = player;
//     }
// }
// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../configs/connection.js");

// Creates a "Book" model that matches up with DB
var Battler = sequelize.define("battler_db", {
            name: Sequelize.STRING,
            hitPoints: Sequelize.INTEGER,
            attack: Sequelize.INTEGER,
            defense: Sequelize.INTEGER,
            speed: Sequelize.INTEGER,
            damage: Sequelize.INTEGER,
            player: Sequelize.BOOLEAN,
        
});

// Syncs with DB
Battler.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Battler;
// module.exports = Character;