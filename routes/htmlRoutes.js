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
  app.get("/userProfile/:name", function(req, res) {
    console.log("htmlroutes.js In get /userProfile with body");
    //console.log("*******************");
    //console.log(req.body);
    console.log("Username is: ");
    console.log(req.params.name);

    // let myUser = req.body;

    // myUser = {
    //   id: 1,
    //   userName: "guest",
    //   weather: true,
    //   news: true,
    //   traffic: true,
    //   quotes: true
    // };
    // console.log("User being sent is: ");
    // console.log(myUser);

    db.users
      .findOne({
        where: {
          userName: req.params.name
        }
      })
      .then(function(dbData) {
        let myUser = dbData.dataValues;
        console.log("My user passed is: ");
        console.log(myUser);
        if( myUser.userName == "guest"){
          myUser.weather = true;
          myUser.news = true;
          myUser.traffic = true;
          myUser.quotes = true;
        }
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
