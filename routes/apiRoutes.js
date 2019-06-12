var db = require("../models");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("1b52f242b6544eddba125c9fb88612e1");
const Request = require("request");
var weather = require("weather-js");
const googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyA4GvQEVUhN2cbBZvQ1ObqGmRnup1mXPyA"
});

module.exports = app => {
  // Get all users
  app.get("/api/users", (req, res) => {
    db.users.findAll({}).then(result => {
      res.json(result);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.users.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  //get one user by username
  app.get("/api/users/:id", (req, res) => {
    db.users
      .findAll({
        where: {
          username: req.params.Users.username
        }
      })
      .then(result => {
        res.json(result);
      });
  });
  app.post("api/users/:id", (req, res) => {
    db.users.findOne({}).then(result => {
      res.json(result);
    });
  });
  app.put("api/users/:id", (req, res) => {
    db.users.findOne({}).then(result => {
      res.json(result);
    });
  });
  // Create a new example
  app.post("/api/examples", (req, res) => {
    db.Example.create(req.body).then(dbExample => {
      res.json(dbExample);
    });
  });
  // Delete an example by id
  app.delete("/api/examples/:id", (req, res) => {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbExample => {
      res.json(dbExample);
    });
  });
  //================================================================= EXTERNAL API REQUESTS
  app.get("/api/quote", (req, res) => {
    Request.get(
      "http://quotes.stormconsultancy.co.uk/random.json",
      (error, response, body) => {
        if (error) {
          return console.dir(error);
        }
        console.dir(JSON.parse(body));
        res.json(response);
      }
    );
  });
  app.get("/api/maps", (req, res) => {
    // Geocode an address.
    googleMapsClient.geocode(
      {
        address: "1600 Amphitheatre Parkway, Mountain View, CA"
      },
      function(err, response) {
        if (err) console.log(err);
        console.log(response);
        res.send(response);
      }
    );
  });
  app.get("/api/weather", (req, res) => {
    weather.find({ search: "San Francisco, CA", degreeType: "F" }, function(
      err,
      result
    ) {
      if (err) throw err;
      res.json(result);
    });
  });
  //News API get request
  app.get("/api/news", (req, res) => {
    newsapi.v2
      .topHeadlines({
        country: "us"
      })
      .then(response => {
        res.json(response);
      });
  });
};
