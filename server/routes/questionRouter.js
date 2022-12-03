const express = require('express');
const { Question } = require('../db/models');

const questionRouter = express.Router();

questionRouter.route('/')
  .get(async (req, res) => {
    try {
      const AllQuestion = await Question.findAll();
      console.log('0000000000');
      return res.json(AllQuestion);
    } catch (error) {
      return console.log(error);
    }
  });

module.exports = questionRouter;
