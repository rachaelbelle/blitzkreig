var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({})
    });


  // Load example page and pass in an example by id
  app.get("preferences", function(req, res) {
    db.Example.findOne({ })
     {
      res.render("preferences")

    };
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
