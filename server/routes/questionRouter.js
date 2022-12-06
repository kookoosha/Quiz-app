const express = require('express');
const { Question } = require('../db/models');

const questionRouter = express.Router();

questionRouter.route('/:id')
// отдаю на фронт все вопросы из БД
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

module.exports = questionRouter;
