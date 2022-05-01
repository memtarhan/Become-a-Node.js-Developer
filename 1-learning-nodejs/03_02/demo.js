var fs = require("fs");

fs.readdir("/Users/mehmettarhan/Desktop", (err, response) => {
  console.log(response);
});
