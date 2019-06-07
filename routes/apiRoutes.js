var db = require("../models");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("1b52f242b6544eddba125c9fb88612e1");

module.exports = function(app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  //News API get request
  // eslint-disable-next-line no-unused-vars
  app.get("/news", function(req, res) {
    newsapi.v2
      .topHeadlines({
        country: "us"
      })
      .then(response => {
        console.log(response);
        /*
        {
          status: "ok",
          articles: [...]
        }
      */
      });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
