




let health = document.getElementById("healthplayer")
health.value -= Math.random();
console.log(health)
//Or whatever you want to do with it.

document.getElementById("heroCurrentHp").innerHTML = "Current HP: " + hero.stats.currentHp;




















//when the health hits zero this will go into effect. 
document.getElementById("characterCreation").style.display = "none";