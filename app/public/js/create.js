function createBattler()
{
    let name = document.getElementById("warrior").value;
    let hitPoints = document.getElementById("hp").value;
    let attack = document.getElementById("attack").value;
    let defense = document.getElementById("defense").value;
    let damage = document.getElementById("damage").value;
    let speed = document.getElementById("speed").value;

    //hero creation
    hero = new Character (name, hitPoints, attack, defense, damage, speed, true)
    console.log(hero)
}