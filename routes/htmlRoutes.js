var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    console.log("htmlroutes.js In get /");
    // db.users.findAll({});
    // {
    res.render("index");
    // }
  });

  // Load example page and pass in an example by id
  app.get("/preferences", function(req, res) {
    console.log("htmlroutes.js In get preferences");
    db.users.findAll({});
    {
      res.render("preferences");
    }
  });

  // Load example page and pass in an example by id
  app.get("/userProfile", function(req, res) {
    console.log("htmlroutes.js In get /userProfile with body");
    console.log("*******************");
    console.log(req.body);

    let myUser = req.body;

    myUser = {
      id: 1,
      userName: "test",
      weather: true,
      news: false,
      traffic: false,
      quotes: true
    };
    console.log("User being sent is: ");
    console.log(myUser);

    db.users
      .findOne({
        where: {
          userName: myUser.userName
        }
      })
      .then(function(dbData) {
        let myUser = dbData.dataValues;
        //console.log(dbData);
        console.log(myUser.userName);
        console.log(myUser.weather);
        console.log(myUser.news);
        console.log(myUser.traffic);
        console.log(myUser.quotes);
        res.render("userProfile", myUser);
      });
  });

  app.post("/api/users", function(req, res) {
    console.log("htmlroutes.js /api/users");
    //console.log(req);
    res.json(req.body);
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    console.log("htmlroutes.js In get *");
    res.render("404");
  });
};
