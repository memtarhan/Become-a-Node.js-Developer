var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

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
  io.emit("SOCKET: new message -- ", request.body);
  response.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log("SOCKET: -- user is connected");
});

/// - Listen to the app
var server = http.listen(3000, () => {
  console.log("server is listening on port", server.address().port);
});
