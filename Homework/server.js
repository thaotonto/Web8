const express = require('express');

let app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/HomePage.html');
});

app.get('/About', (req, res) => {
  res.sendFile(__dirname + '/public/About.html');
});

app.get('/File', (req, res) => {
  res.sendFile(__dirname + '/public/File.html');
})
app.listen(6969, () => {
  console.log('Server is ready');
});
