var fs = require("fs");
const path = require("path");

fs.createReadStream("_redirects").pipe(
  fs.createWriteStream(path.join(__dirname, "out", "_redirects"))
);
