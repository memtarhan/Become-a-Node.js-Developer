var fs = require("fs");

var data = {
  name: "Jim",
};

fs.writeFile("data.json", JSON.stringify(data), (err) => {
  console.log("finished", err);
});
