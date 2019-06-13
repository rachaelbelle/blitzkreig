var db = require("../models");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("1b52f242b6544eddba125c9fb88612e1");
const Request = require("request");
var weather = require("weather-js");
const googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyA4GvQEVUhN2cbBZvQ1ObqGmRnup1mXPyA"
});

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    console.log("htmlroutes.js In get /");
    // db.users.findAll({});
    // {
    res.render("index");
    // }
  });

  // Load example page and pass in an example by id
  app.get("/preferences", function (req, res) {
    console.log("htmlroutes.js In get preferences");
    db.users.findAll({}); {
      res.render("preferences");
    }
  });

  // Load example page and pass in an example by id
  app.get("/userProfile/:name", function (req, res) {
    console.log("htmlroutes.js In get /userProfile with body");
    //console.log("*******************");
    //console.log(req.body);
    console.log("Username is: ");
    console.log(req.params.name);

    let quote;
    let titles = [];
    let titletrying = "";
    let articles = [];
    let articlestrying = "";

    // $.get("/quote", {}
    // ).then( data => {
    //   debugger;
    //   quote=data;
    // });
    Request.get(
      "http://quotes.stormconsultancy.co.uk/random.json",
      (error, response, body) => {
        if (error) {
          quote = "Error getting quote... Sorry";
        }
        debugger;
        //console.log(JSON.parse(body));
        quote = JSON.parse(body);

        //got the quote going... need to add the next part

        newsapi.v2.topHeadlines({
          // q: 'trump',
          // category: 'politics',
          // language: 'en',
          country: 'us'
        }).then(response => {
          //console.log(response);

          let count = 0;
          let count2 = 0;
          //articles = response.articles;
          console.log("**********************");
          //console.log(response);
          response.articles.forEach(article => {
            var jsonTitle;
            if (count !== 3) {
              jsonTitle = {
                title: article.title
              }
              titletrying += "<p>" + article.title + "</p>";
              //titles.push(jsonTitle);
              titles.push(titletrying);
              //console.log("added title: ");
              //console.log(jsonTitle)
              count++;
            }
            var jsonArticle;
            if (count2 !== 10) {
              jsonArticle = {
                title: article.title,
                description: article.description,
                url: article.url
              }
              articlestrying += "<p>" + article.title + "</p>";
              articlestrying += "<p>" + article.description + "</p>";
              articlestrying += "<p>" + article.url + "</p>";
              //articles.push(jsonArticle);
              articles.push(articlestrying);
              //console.log("added article: ");
              //console.log(jsonArticle)
              count2++;
            }
          });

          db.users
            .findOne({
              where: {
                userName: req.params.name
              }
            })
            .then(function (dbData) {
              let myUser;
              if (req.params.name == "guest") {
                myUser = {
                  id: 1,
                  firstName: 'guest',
                  lastName: 'guest',
                  userName: 'guest',
                  email: 'guest@guest.guest',
                  password: 'password',
                  zipCode: '08724',
                  weather: true,
                  news: true,
                  traffic: true,
                  quotes: true,
                  createdAt: '2019-06-13T04:32:06.000Z',
                  updatedAt: '2019-06-13T04:32:06.000Z'
                }
              } else {
                myUser = dbData.dataValues;
              }

              // console.log("My user passed is: ");
              // console.log(myUser);

              // console.log("User zipcode is: " + myUser.zipCode);
              // ****** Weather check
              weather.find({
                search: myUser.zipCode,
                degreeType: "F"
              }, function (
                err,
                result
              ) {
                if (err) throw err;
                // res.json(result);
                //console.log("Weather result is: ");
                //console.log(result);

                var weatherJson = {
                  name: result[0].location.name,
                  zip: result[0].location.zipcode,
                  temperature: result[0].current.temperature,
                  feelslike: result[0].current.feelslike,
                  humidity: result[0].current.humidity,
                  sky: result[0].current.skytext,
                  wind: result[0].current.windspeed,
                }

                googleMapsClient.geocode({
                  address: "1600 Amphitheatre Parkway, Mountain View, CA"
                },
                function (err, response2) {
                  if (err) console.log(err);
                  console.log(response2);
                  //res.send(response);

                  let results = response2.results.

                  myUser.quote = quote;
                  // var hbsObject1 = {
                  //   titles: titles
                  // };
                  // var hbsObject2 = {
                  //   articles: articles
                  // };
                  myUser.titles = titletrying;
                  myUser.articles = articlestrying;
                  myUser.weatherDetails = weatherJson
                  console.log("sending my user: ");
                  console.log(myUser);
                  res.render("userProfile", myUser);
                }
              );




              });


            })




        });






      }
    )



  });

  app.post("/api/users", function (req, res) {
    console.log("htmlroutes.js /api/users");
    //console.log(req);
    res.json(req.body);
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    console.log("htmlroutes.js In get *");
    res.render("404");
  });
};