const { timeStamp } = require("console");


// Character.prototype.stateName = function () {
//     console.info(this.name)
// }
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var testChar = "INSERT INTO battlers (name, hitPoints, attack, defense, speed, damage ) VALUES ('Test', '1', '1', '1', '1', '1')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});
// testChar.stateName()
