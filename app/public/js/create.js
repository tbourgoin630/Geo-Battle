function createBattler() {
   
    let name = document.getElementById("warrior").value;
    //let hitPoints = document.getElementById("hp").value;
    let attack = document.getElementById("attack").value;
    let defense = document.getElementById("defense").value;
    let damage = document.getElementById("damage").value;
    let speed = document.getElementById("speed").value;

    //hero creation
    hero = new Character(name, 10, attack, defense, damage, speed, true)
    console.log(hero)
    
   var myhero = {name, attack, defense, damage, speed }
    var myJSON = JSON.stringify(hero);

    var query = connection.query('INSERT INTO table SET column=?', responseJson, 
     function(err, result) {

        if(err) throw err;
        
       console.log('data inserted');
 });


}

