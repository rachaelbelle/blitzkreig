var db = require("../models");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("1b52f242b6544eddba125c9fb88612e1");
const Request = require("request");
<<<<<<< HEAD
module.exports = (app) => {
  // Get all users
  app.get("/api/users", (req, res) => {
    db.Users.findAll({}).then((result) => {
      res.json(result);
    });
  });

  
=======
module.exports = app => {
  // Get all users
  app.get("/api/users", (req, res) => {
    db.Users.findAll({}).then(result => {
      res.json(result);
    });
  });
>>>>>>> c693144ffd823d05ea11c4de82d0f03fa2e4748f
  //get one user by username
  app.get("/api/users/:id", (req, res) => {
    db.Users.findAll({
      where: {
        username: req.params.Users.username
      }
<<<<<<< HEAD
    }).then((result) => {
      res.json(result);
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
  
  app.post("api/users/:id", (req, res) => {
    db.Users.findOne({}).then((result) => {
      res.json(result);
    });
  });
  
  app.put("api/users/:id", (req, res) => {
    db.Users.findOne({}).then((result) => {
      res.json(result);
    });
  });
  

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


  // Create a new example
  app.post("/api/examples", (req, res) => {
    db.Example.create(req.body).then((dbExample) => {
      res.json(dbExample);
=======
    }).then(result => {
      res.json(result);
>>>>>>> c693144ffd823d05ea11c4de82d0f03fa2e4748f
    });
  });
  app.post("api/users/:id", (req, res) => {
    db.Users.findOne({}).then(result => {
      res.json(result);
    });
  });
  app.put("api/users/:id", (req, res) => {
    db.Users.findOne({}).then(result => {
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
<<<<<<< HEAD
    }).then((
      dbExample
      ) => {
        res.json(dbExample);
      });
    });
    
    //================================================================= EXTERNAL API REQUESTS
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
=======
    }).then(dbExample => {
      res.json(dbExample);
    });
  });
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
  //News API get request
  app.get("/news", (req, res) => {
    newsapi.v2
      .topHeadlines({
        country: "us"
      })
      .then(response => {
        res.json(response);
      });
  });
>>>>>>> c693144ffd823d05ea11c4de82d0f03fa2e4748f
};
