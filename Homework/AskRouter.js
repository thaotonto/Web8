const express = require('express');
const Router = express.Router();
const fileController = require('./fileController')

Router.get('/', (req, res) => {
  res.render('askQuestion', {nav: `/question/${fileController.getRandomQuestion().id}`, askview: true});
});

module.exports = Router;
