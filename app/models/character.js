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
    // name: Sequelize.STRING,
    name: {
        type: Sequelize.DataTypes.STRING,
        get() {
            // const nameString = this.getDataValue(name);
            // return nameString;
            return `${this.name}`;
        }
    },
    // hitPoints: Sequelize.INTEGER,
    hitPoints: {
        type: Sequelize.DataTypes.INTEGER,
        get() {
            // const hpValue = this.getDataValue(hitPoints);
            // return hpValue;
            return `${this.hitPoints}`;
        }
    },
    // attack: Sequelize.INTEGER,
    attack: {
        type: Sequelize.DataTypes.INTEGER,
        get() {
            // const attackValue = this.getDataValue(attack);
            // return attackValue;
            return `${this.attack}`;
        }
    },
    // defense: Sequelize.INTEGER,
    defense: {
        type: Sequelize.DataTypes.INTEGER,
        get() {
            // const defenseValue = this.getDataValue(defense);
            // return defenseValue;
            return `${this.defense}`;
        }
    },
    // speed: Sequelize.INTEGER,
    speed: {
        type: Sequelize.DataTypes.INTEGER,
        get() {
            // const speedValue = this.getDataValue(speed);
            // return speedValue;
            return `${this.speed}`;
        }
    },
    // damage: Sequelize.INTEGER,
    damage: {
        type: Sequelize.DataTypes.INTEGER,
        get() {
            // const damageValue = this.getDataValue(damagePoints);
            // return damageValue;
            return `${this.damage}`;
        }
    },
    // player: Sequelize.BOOLEAN,
    player: {
        type: Sequelize.DataTypes.BOOLEAN,
        get() {
            // const playerStatus = this.getDataValue(player);
            // return playerStatus;
            return `${this.player}`;
        }
    }

});

// Syncs with DB
Battler.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Battler;
// module.exports = Character;