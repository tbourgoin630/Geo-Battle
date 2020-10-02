// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Battler = require("../models/character.js");

// Routes
// =============================================================
module.exports = function (app) {
    // Get all books
    // app.get("/api/all", function(req, res) {
    //   Book.findAll({}).then(function(results) {
    //     res.json(results);
    //   });
    // });

    // Get a specific book
    app.get("/api/:battler", function (req, res) {
        Battler.findAll({
            where: {
                name: req.params.battler
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    // Get all books of a specific genre
    // app.get("/api/genre/:genre", function(req, res) {
    //   Book.findAll({
    //     where: {
    //       genre: req.params.genre
    //     }
    //   }).then(function(results) {
    //     res.json(results);
    //   });
    // });

    // Get all books from a specific author
    // app.get("/api/author/:author", function(req, res) {
    //   Book.findAll({
    //     where: {
    //       author: req.params.author
    //     }
    //   }).then(function(results) {
    //     res.json(results);
    //   });
    // });

    // Get all "long" books (books 150 pages or more)
    // app.get("/api/books/long", function(req, res) {
    //   Book.findAll({
    //     where: {
    //       pages: {
    //         $gte: 150
    //       }
    //     },
    //     order: [["pages", "DESC"]]
    //   }).then(function(results) {
    //     res.json(results);
    //   });
    // });

    // Get all "short" books (books 150 pages or less)
    // app.get("/api/books/short", function(req, res) {
    //   Book.findAll({
    //     where: {
    //       pages: {
    //         $lte: 150
    //       }
    //     },
    //     order: [["pages", "ASC"]]
    //   }).then(function(results) {
    //     res.json(results);
    //   });
    // });

    // Add a book
    app.post("/api/new", function (req, res) {
        console.log("Battler Data:");
        console.log(req.body);
        Battler.create({

            name: req.body.name,
            hitPoints: req.body.hitPoints,
            attack: req.body.attack,
            defense: req.body.defense,
            speed: req.body.speed,
            damage: req.body.damage,
            player: req.body.player
        }).then(function (results) {
            res.json(results);
        });
    });

    // Delete a book
    app.delete("/api/battler/:id", function (req, res) {
        console.log("Battler ID:");
        console.log(req.params.id);
        Battler.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end();
        });
    });
};