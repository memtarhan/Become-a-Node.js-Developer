var express = require("express");
var bodyParser = require("body-parser");

/// - Create an app
var app = express();

/// - To use static html file
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var messages = [
  { name: "Jim", message: "Hey Dwight!" },
  { name: "Dwight", message: "Michael!" },
];

app.get("/messages", (request, response) => {
  response.send(messages);
});

app.post("/messages", (request, response) => {
  console.log("POST: /messages -- ", request.body);
  messages.push(request.body);
  response.sendStatus(200);
});

/// - Listen to the app
var server = app.listen(3000, () => {
  console.log("server is listening on port", server.address().port);
});
