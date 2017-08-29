const fs = require("fs");


const saveFile = (filename, data) => {
  fs.writeFileSync(filename, data);
}

const readFile = (filename, callback) => {
  return fs.readFile(filename, "utf-8", (err, data) => {
    callback(data);
  });
}

const readFileSync = (filename) => {
  return fs.readFileSync(filename, "utf-8");
}

module.exports = {
  saveFile,
  readFile,
  readFileSync
}
