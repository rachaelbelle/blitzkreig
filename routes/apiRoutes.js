var db = require("../models");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("1b52f242b6544eddba125c9fb88612e1");
const Request = require("request");
module.exports = (app) => {
// Get all users
app.get("/api/users", (req, res) => {
db.Users.findAll({}).then((result) => {
res.json(result);
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
// Create a new example
app.post("/api/examples", (req, res) => {
db.Example.create(req.body).then((dbExample) => {
res.json(dbExample);
});
});
// Delete an example by id
app.delete("/api/examples/:id", (req, res) => {
db.Example.destroy({
where: {
id: req.params.id
}
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
};
