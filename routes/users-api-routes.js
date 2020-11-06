const passport = require("passport");
var db = require("../models");

module.exports = function (app) {

    // find all
    app.get("/api/users", function (req, res) {
        db.Users.findAll({
            include: [db.Run]
        }).then(function (dbRun) {
            res.json(dbRun);
        });
    });

    // find one
    app.get("/api/users/:id", function (req, res) {
        db.Users.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Run]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/users", function (req, res) {
        db.Users.create(req.body)
            .then(function (dbUser) {
                res.redirect(307, '/api/login');
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    app.delete("/api/users/:id", function (req, res) {
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.post('/api/login', passport.authenticate('local'), (req, res) => {
        res.json(req.user);
    });
}