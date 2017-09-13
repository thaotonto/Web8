const express = require('express');
const fileController = require('./fileController');
const Router = express.Router();

Router.get('/', (req, res) => {
  let question;
  if (fileController.getTotalQuestion() === 0) {
    question = 'There is no question yet';
    res.render('home', {
      question,
      visibility: 'hidden',
      nav: `/question/${fileController.getRandomQuestion().id}`
    });
  } else {

    question = fileController.getRandomQuestion();
    res.render('home', {
      question : question.question,
      href: `/api/question/${question.id}`,
      nav: `/question/${fileController.getRandomQuestion().id}`
    });
  }
});

module.exports = Router;
