class Character {
    constructor(name, hitPoints, attack, defense, speed, damage, player){
    this.name = name;
    this.hitPoints = hitPoints;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.damage = damage;
    this.player = player;
    }
}
module.exports = Character;