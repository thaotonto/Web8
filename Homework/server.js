const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fileController = require('./fileController');
const homeRouter = require('./HomeRouter');
const askRouter = require('./AskRouter');
const apiRouter = require('./apiRouter');
const questionRouter = require('./questionRouter');

let app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/public'));
app.use('/', homeRouter);
app.use('/ask', askRouter);
app.use('/api', apiRouter);
app.use('/question', questionRouter);

app.get('/About', (req, res) => {
  res.render('about');
});

app.get('/File', (req, res) => {
  let textRender = fileController.readFileSync('question.txt');
  res.render('file', {textRender});
});

app.listen(6969, () => {
  console.log('Server is ready');
});
