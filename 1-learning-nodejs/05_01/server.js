var express = require("express");

/// - Create an app
var app = express();

/// - To use static html file
app.use(express.static(__dirname));

var messages = [
  { name: "Jim", message: "Hey Dwight!" },
  { name: "Dwight", message: "Michael!" },
];

app.get("/messages", (request, response) => {
  response.send(messages);
});

/// - Listen to the app
var server = app.listen(3000, () => {
  console.log("server is listening on port", server.address().port);
});
