const express = require('express');
const { Answer, Question } = require('../db/models');

const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    const {
      rightAnswer, answer1, answer2, answer3,
    } = req.body;
    const latestQuestion = Question.findAll({
      limit: 1,
      where: {
        key: Question.createdAt,
      },
      order: [['createdAt', 'DESC']],
    });
    // const result = Answer.create({ title, question_id: latestQuestion.id, isCorrect });
    const result = await Answer.bulkCreate([
      { title: rightAnswer, question_id: latestQuestion.id, isCorrect: true },
      { title: answer2, question_id: latestQuestion.id, isCorrect: false },
      { title: answer3, question_id: latestQuestion.id, isCorrect: false },
      { title: answer1, question_id: latestQuestion.id, isCorrect: false },
    ]);
    return res.json(result);
  } catch (error) {
    return console.log(error);
  }
});

module.exports = router;
