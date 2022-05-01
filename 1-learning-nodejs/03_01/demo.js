var fs = require("fs");

var data = require("./data.json");
console.log(data.name);

fs.readFile("./data.json", "utf-8", (err, response) => {
  var json = JSON.parse(response);
  console.log(json.name);
});
