//function createBattler()
// {
//     // let name = document.getElementById("warrior").value;
//     // //let hitPoints = document.getElementById("hp").value;
//     // let attack = document.getElementById("attack").value;
//     // let defense = document.getElementById("defense").value;
//     // let damage = document.getElementById("damage").value;
//     // let speed = document.getElementById("speed").value;

//     //hero creation
//     // hero = new Character (name, 10, attack, defense, damage, speed, true)
//     // console.log(hero)
// }
console.log("js loaded.")
$(document).ready(function() {
// When user clicks add-btn
$("#createHero").on("click", function(event) {
    event.preventDefault();
    console.log("function triggered")
    // Make a newBook object
    var newBattler = {
      name: $("#warrior").val().trim(),
      hitPoints: 10,
      attack: $("#attack").val().trim(),
      defense: $("#defense").val().trim(),
      damage: $("#damage").val().trim(),
      speed: $("#speed").val().trim(),
      player: true
    };
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newBattler)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
        console.log("This is inside the post.")
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#warrior").val("");
    $("#attack").val("");
    $("#defense").val("");
    $("#damage").val("");
    $("#speed").val("");
  
  });
});