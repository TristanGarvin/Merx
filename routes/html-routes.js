const path = require("path");
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {

    app.get("/", function (req, res) {
        // If the user already has an account send them to the home page
        if (req.user) {
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/signup", function (req, res) {
        // If the user already has an account send them to the home page
        if (req.user) {
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });


    app.get("/login", function (req, res) {
        // If the user already has an account send them to the home page
        if (req.user) {
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/timer", function (req, res) {
        if (req.user) {
            return res.sendFile(path.join(__dirname, '../public/timer.html'));
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/home", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
}