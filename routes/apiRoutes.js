var db = require("../models");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("1b52f242b6544eddba125c9fb88612e1");
const Request = require("request");
module.exports = (app) => {
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  //get one user by username
app.get("/api/users/:id", (req, res) => {
  db.Users.findAll({
  where: {
  username: req.params.Users.username
  }
  }).then((result) => {
  res.json(result);

  //News API get request
  // eslint-disable-next-line no-unused-vars
  // app.get("/news", function(req, res) {
  //   newsapi.v2
  //     .topHeadlines({
  //       country: "us"
  //     })
  //     .then(response => {
  //       console.log(response);
  //       /*
  //       {
  //         status: "ok",
  //         articles: [...]
  //       }
  //     */
  //     });
  // });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

// Create a new example
app.post("/api/examples", function(req, res) {
  db.Example.create(req.body).then(function(dbExample) {
    res.json(dbExample);
  });
});

app.get("/api/examples", function(req, res) {
  db.Example.findAll({}).then(function(dbExample) {
    //console.log(dbExample);
    res.json(dbExample);
  });
});


//================================================================= EXTERNAL API REQUESTS
// Delete an example by id
app.delete("/api/examples/:id", function(req, res) {
  db.Example.destroy({ where: { id: req.params.id } }).then((dbExample) => {
      res.json(dbExample);
    });
  });
  app.get("/quote", (req,res) => {
    Request.get("http://quotes.stormconsultancy.co.uk/random.json", (error, response, body) => {
    if(error) {
    return console.dir(error);
    }
    console.dir(JSON.parse(body));
    res.json(response);
    });
  })
    //News API get request
  app.get("/news", (req, res) => {
    newsapi.v2.topHeadlines({
    country: 'us'
    }).then(response => {
    res.json(response);
    });
    });
};