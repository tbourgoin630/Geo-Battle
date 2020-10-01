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
        // checkIfHit(target) {
        //     let hitChance = .5 - .1 * (target.defense);
        //     console.info(hitChance + " hit chance")
        //     let hitRoll = Math.random() + .1 * (this.attack);
        //     console.info(hitRoll + " hit roll")
        //     if (hitRoll >= hitChance) {
        //         hit = true;
        //     }
        //     else {
        //         hit = false;
    
        //     }
        // },
        // attackTarget(target) {
        //     console.info(this.name + " attacks " + target.name)
        //     this.checkIfHit(target)
        //     if (hit === true) {
        //         let dmg = this.damage
        //         console.info(dmg)
        //         target.hitPoints -= dmg;
        //     }
        //     else {
        //         console.info(this.name + " misses " + target.name)
        //     }
        //     target.isAlive();
        // },
        // isAlive() {
        //     if (this.hitPoints > 0) {
        //         console.info(this.name + " is alive.")
        //     }
        //     else {
        //         console.info(this.name + " has died!");
        //     }
        // },
        // turn() {
        //     if (this.hitPoints > 0) {
        //         if (this.player === false) {
        //             this.attackTarget(hero)
        //         }
        //         else {
        //             this.attackTarget(enemy)
        //         }
        //     }
        //     else {
        //         console.info("no turn for dead person")
        //     }
        // }
});

// Syncs with DB
Battler.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Battler;
// module.exports = Character;