var express = require("express");

/// - Create an app
var app = express();

app.use(express.static(__dirname));

/// - Listen to the app
var server = app.listen(3000, () => {
  console.log("server is listening on port", server.address().port);
});
