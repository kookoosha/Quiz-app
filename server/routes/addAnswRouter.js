const express = require('express');
const { Answer, Question } = require('../db/models');

const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    const { title, isCorrect } = req.body;
    const latestQuestion = Question.findAll({
      limit: 1,
      where: {
        key: Question.createdAt,
      },
      order: [['createdAt', 'DESC']],
    });
    const result = Answer.create({ title, question_id: latestQuestion.id, isCorrect }); // await Answer.bulkCreate([{ title: answer1 }, { title: answer2 }, ...])
    return res.json(result);
  } catch (error) {
    return console.log(error);
  }
});

module.exports = router;
