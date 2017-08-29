const express = require('express');
const fileController = require('./fileController');

let app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/HomePage.html');
});

app.get('/About', (req, res) => {
  res.sendFile(__dirname + '/html/About.html');
});

app.get('/File', (req, res) => {
  let file = fileController.readFileSync('package.json');
  let htmlFile= fileController.readFileSync('./html/File.html');
  let result = htmlFile.replace(/future/g, file);
  res.send(result);
});

app.listen(6969, () => {
  console.log('Server is ready');
});
