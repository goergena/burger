var express = require("express");
var bodyParser = require("body-parser");
//var mysql = require("mysql");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgersController.js");


var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

/*
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
*/
/*

app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { burgs: data });
  });
});

app.post("/burgers", function(req, res) {
  connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burgerTOWN], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});


app.put("/burgers/:id", function(req, res) {
  connection.query("UPDATE burgers SET eaten = 1 WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

*/

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
