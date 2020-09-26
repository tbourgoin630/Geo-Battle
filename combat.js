const Character = require("./app/models/character");

let hero = new Character("Hero", 5, 1, 1, 1, 1, true);
let enemy = new Character("Enemy", 5, 1, 1, 1, 1, false);
let floridaMan = new Character("Florida Man", 100, 100, 100, 100, 100, false)
let texasRanger = new Character("Texas Ranger", 1, 1, 1, 1, 1, false)
let kentuckyColonel = new Character("Kentucky Colonel", 1, 1, 1, 1, 1, false)

let turnArray = [hero, enemy];
let hit = false;

Character.prototype.checkIfHit = function (target) {
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
Character.prototype.attackTarget = function (target) {
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
Character.prototype.isAlive = function () {
    if (this.hitPoints > 0) {
        console.info(this.name + " is alive.")
    }
    else {
        console.info(this.name + " has died!");
    }
}
Character.prototype.turn = function () {
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
function combat() {
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
combat()
