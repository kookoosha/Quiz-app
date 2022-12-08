const express = require('express');
const { Answer, Question } = require('../db/models');

const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    const latestQuestion = await Question.findAll({
      limit: 1,
      // where: { createdAt: Question.createdAt },
      order: [['createdAt', 'DESC']],
    });
    const {
      rightAnswer, answer1, answer2, answer3,
    } = req.body;
    console.log(latestQuestion);
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
