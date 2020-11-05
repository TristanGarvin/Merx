const db = require("../models");

module.exports = function(app) {

// Get all runs
    app.get("/api/runs", function(req, res) {
        var query = {};
        if (req.query.user_id) {
          query.UserId = req.query.user_id;
        }
        db.Run.findAll({
          where: query,
          include:[db.User]
        }).then(function(dbRun) {
          res.json(dbRun);
        });
      });
    
      // Get route for retrieving a single run
      app.get("/api/runs/:id", function(req, res) {
        db.Run.findOne({
          where: {
            id: req.params.id
          },
          include: [db.User]
        }).then(function(dbRun) {
          console.log(dbRun);
          res.json(dbRun);
        });
      });

      app.post("/api/runs", function(req, res) {
        db.Run.create(req.body).then(function(dbRun) {
          res.json(dbRun);
        });
      });
    
      // DELETE route for deleting runs
      app.delete("/api/runs/:id", function(req, res) {
        db.Run.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbRun) {
          res.json(dbRun);
        });
      });
    
      // PUT route for updating runs
      app.put("/api/runs", function(req, res) {
        db.Run.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbRun) {
          res.json(dbRun);
        });
      });
}