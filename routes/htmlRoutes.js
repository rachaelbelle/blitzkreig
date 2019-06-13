var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/preferences", function(req, res) {
    res.render("preferences");
  });

  // Load example page and pass in an example by id
  app.get("/userProfile", function(req, res) {
    res.render("userProfile");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
