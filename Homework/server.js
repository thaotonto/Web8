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
app.use('/', homeRouter);
app.use('/ask', askRouter);
app.use('/api', apiRouter);
app.use('/question', questionRouter);

app.get('/About', (req, res) => {
  question = fileController.getRandomQuestion();
  res.render('about',{nav: `/question/${fileController.getRandomQuestion().id}`});
});

app.get('/File', (req, res) => {
  let textRender = fileController.readFileSync('question.txt');
  question = fileController.getRandomQuestion();
  res.render('file', {textRender, nav: `/question/${fileController.getRandomQuestion().id}`});
});

app.use(express.static(__dirname + '/public'));

app.listen(6969, () => {
  console.log('Server is ready');
});
