var db = require("../models");

module.exports = function (app) {
  // Load index page
<<<<<<< HEAD
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
=======
  app.get("/", function(req, res) {
    db.Example.findAll({});
    {
      res.render("index");
    }
  });

  // Load example page and pass in an example by id
  app.get("/preferences", function(req, res) {
    db.Example.findAll({});
    {
      res.render("preferences");
    }
  });

  // Load example page and pass in an example by id
  app.get("/userProfile", function(req, res) {
    db.Example.findAll({});
    {
      res.render("userProfile");
    }
>>>>>>> 305072e9e06011f55f5996c9c910665259a93016
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};