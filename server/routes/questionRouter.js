const express = require('express');
const { Question, Answer } = require('../db/models');

const questionRouter = express.Router();

questionRouter.route('/:id')
// отдаю на фронт вопросы на конкретный Левел
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      // console.log(id);
      const result = await Question.findAll({
        where: { level_id: id },
      });
      return res.json(result);
    } catch (error) {
      return console.log(error);
    }
  });

questionRouter.route('/answer/:id')
// отдаю на фронт все ответы на конкретный вопрос
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      console.log(id);
      const result = await Answer.findAll({
        where: { question_id: id },
      });
      console.log(result);
      return res.json(result);
    } catch (error) {
      return console.log(error);
    }
  });

module.exports = questionRouter;
