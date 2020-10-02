function checkIfHit(target) {
    let hitChance = .5 - .1 * (target.defense);
    console.info(hitChance + " hit chance")
    let hitRoll = Math.random() + .1 * (this.attack);
    console.info(hitRoll + " hit roll")
    if (hitRoll >= hitChance) {
        hit = true;
    }
    else {
        hit = false;

    }
}
function attackTarget(target) {
    console.info(this.name + " attacks " + target.name)
    this.checkIfHit(target)
    if (hit === true) {
        let dmg = this.damage
        console.info(dmg)
        target.hitPoints -= dmg;
    }
    else {
        console.info(this.name + " misses " + target.name)
    }
    target.isAlive();
}
function isAlive() {
    if (this.hitPoints > 0) {
        console.info(this.name + " is alive.")
    }
    else {
        console.info(this.name + " has died!");
    }
}
function turn() {
    if (this.hitPoints > 0) {
        if (this.player === false) {
            this.attackTarget(hero)
        }
        else {
            this.attackTarget(enemy)
        }
    }
    else {
        console.info("no turn for dead person")
    }
}
//const Character = require("../../models/character");
// class Character {
//     constructor(name, hitPoints, attack, defense, speed, damage, player) {
//         this.name = name;
//         this.hitPoints = hitPoints;
//         this.attack = attack;
//         this.defense = defense;
//         this.speed = speed;
//         this.damage = damage;
//         this.player = player;
//     }
//     checkIfHit(target) {
//         let hitChance = .5 - .1 * (target.defense);
//         console.info(hitChance + " hit chance")
//         let hitRoll = Math.random() + .1 * (this.attack);
//         console.info(hitRoll + " hit roll")
//         if (hitRoll >= hitChance) {
//             hit = true;
//         }
//         else {
//             hit = false;

//         }
//     };
//     attackTarget(target) {
//         console.info(this.name + " attacks " + target.name)
//         this.checkIfHit(target)
//         if (hit === true) {
//             let dmg = this.damage
//             console.info(dmg)
//             target.hitPoints -= dmg;
//         }
//         else {
//             console.info(this.name + " misses " + target.name)
//         }
//         target.isAlive();
//     };
//     isAlive() {
//         if (this.hitPoints > 0) {
//             console.info(this.name + " is alive.")
//         }
//         else {
//             console.info(this.name + " has died!");
//         }
//     };
//     turn() {
//         if (this.hitPoints > 0) {
//             if (this.player === false) {
//                 this.attackTarget(hero)
//             }
//             else {
//                 this.attackTarget(enemy)
//             }
//         }
//         else {
//             console.info("no turn for dead person")
//         }
//     };
// }
let hero = new Character("Hero", 0, 1, 1, 1, 1, true);
let enemy = new Character("Enemy", 5, 1, 1, 1, 1, false);
let floridaMan = new Character("Florida Man", 100, 100, 100, 100, 100, false)
let texasRanger = new Character("Texas Ranger", 1, 1, 1, 1, 1, false)
let kentuckyColonel = new Character("Kentucky Colonel", 1, 1, 1, 5, 1, false)
//boston teapartier
let hit = false;
function combat() {
    if (hero.hitPoints <= 0) {
        console.log("No condition to fight.")
    }
    else {
        let turnArray = [hero, enemy];
        turnArray.sort((a, b) => (a.speed < b.speed) ? 1 : (a.speed === b.speed) ? ((a.name > b.name) ? 1 : -1) : -1)
        console.info("start combat")
        while (hero.hitPoints > 0 && enemy.hitPoints > 0) {
            for (i = 0; i < turnArray.length; i++) {
                turnArray[i].turn()
            }
        }
        console.info("Battle over")
        if (hero.hitPoints > 0) {
            console.info(hero.name + " wins")
        }
        else {
            console.info(hero.name + " loses")
            if (enemy.name === "Florida Man") {
                console.info("No one defeats Florida Man.")
            }
            else { }
        }
    }
}
//combat()

function roundOne() {
    enemy = kentuckyColonel;
    combat()
}
function roundTwo() {
    enemy = texasRanger;
    combat()
}
function roundThree() {
    enemy = floridaMan;
    combat()
}
// roundOne()
// roundTwo()
// roundThree()