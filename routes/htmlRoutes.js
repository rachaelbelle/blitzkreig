var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.users.findAll({});
    {
      res.render("index");
    }
  });

  // Load example page and pass in an example by id
  app.get("/preferences", function(req, res) {
    db.users.findAll({});
    {
      res.render("preferences");
    }
  });

  // Load example page and pass in an example by id
  app.get("/userProfile", function(req, res) {
    console.log("*******************"+req.params);
    console.log(req.params.username);
    db.users.findOne({
      where: {
        userName: req.params.username
      }
    }).then(function(dbData) {
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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
