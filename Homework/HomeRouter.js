const express = require('express');
const fileController = require('./fileController');
const Router = express.Router();

Router.get('/', (req, res) => {
  let question;
  if (fileController.getTotalQuestion() === 0) {
    question = 'There is no question yet';
    res.render('home', {
      question,
      visibility: 'hidden'
    });
  } else {
    listQuestion = fileController.getListQuestion();
    question = listQuestion[Math.floor((Math.random() * listQuestion.length))];
    res.render('home', {
      question : question.question,
      href: `/api/question/${question.id}`
    });
  }
});

module.exports = Router;
