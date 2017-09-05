const express = require('express');
const Router = express.Router();
const fileController = require('./fileController');

Router.get('/', (req, res, next) => {
  res.render('questionid');
})

Router.get('/:id', (req, res) => {
  question = fileController.getListQuestion();
  question = question[req.params.id];
  res.render('questionid', {
    question: question.question,
    nYes: question.yes,
    nNo: question.no
  });
});

module.exports = Router;
