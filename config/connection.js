var mysql = require("mysql");
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

// eslint-disable-next-line no-unused-vars
connection.query("SELECT 1 + 1 AS solution", function(err, rows, fields) {
  if (err) {
    throw err;
  }

  console.log("The solution is: ", rows[0].solution);
});

connection.end();
