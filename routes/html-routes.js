const require = ("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/timer", function (req, res) {
        if (req.user) {
            res.redirect("/timer");
        }
        res.sendFile(path.join(__direname, "../public/login.html"));
    });


    app.get("/home", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
}