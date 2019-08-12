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
    console.log("apiRoutes.js In get /api/users");
    console.log(req.body);
    let username;
    if (req.body.username) {
      username = req.body.username;
    } else {
      username = "test";
    }
    db.users.findOne({ where: { userName: username } }).then(result => {
      console.log("Found user with username: " + username);
      console.log("Returning result:");
      console.log(result);
      res.json(result);
    });
  });

  app.get("/api/users/:userName", (req, res) => {
    console.log("apiRoutes.js In get /api/users:username");
    console.log(req.params.userName);

    db.users
      .findOne({ where: { username: req.params.userName } })
      .then(result => {
        res.json(result);
      });
  });

  // Create a new user (for prefernces page)
  app.post("/api/users", function(req, res) {
    console.log("apiRoutes.js In post /api/users with body:");
    console.log(req.body);
    db.users.create(req.body).then(function(dbExample) {
      console.log("success creating user- user created is: ");
      console.log("*************")
      console.log(dbExample);
      res.json(dbExample);
    });
  });

  //get one user by username
  app.get("/api/users/:id", (req, res) => {
    console.log("apiRoutes.js In get /api/users/:id");
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

  app.post("/api/login", function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    console.log("apiRoutes.js in post /api/login");
    console.log(req.body);
    res.json("/userProfile/"+req.body.userName);
    //res.render("userProfile");
  });

  app.get("/api/user_data", function(req, res) {
    console.log("apiRoutes.js  get /api/user_data");
    //console.log(req);
    if (!req.user) {
      // The user is not logged in, send back an empty object
      console.log("user is not passed in req, creating guest user");
      res.json({
        userName: "guest",
        id: 199
      });
      console.log("apiRoutes get /api/user_data fail getting user");
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      console.log("apiRoutes get /api/user_data got user");
      res.json({
        userName: req.user.userName,
        id: req.user.id
      });
    }
  });

  // DO NOT DELETE **** Needed for Travis Tests
  app.delete("/api/examples/:id", (req, res) => {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbExample => {
      res.json(dbExample);
    });
  });

  // DO NOT DELETE **** Needed for Travis Tests
  app.get("/api/examples", function(req,res) {
    db.Example.findAll({}).then(function(dbExample){
      res.json(dbExample);
    })
  })

  // DO NOT DELETE **** Needed for Travis Tests
  app.post("/api/examples", function(req,res) {
    db.Example.create(req.body).then(function(dbExample){
      res.json(dbExample);
    })
  })

  //================================================================= EXTERNAL API REQUESTS
  app.get("/quote", (req, res) => {
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
      {142 Lafayette Street
        Newark, NJ
        07105 United States
        address: "142 Lafayette Street, Newark, NJ"
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
