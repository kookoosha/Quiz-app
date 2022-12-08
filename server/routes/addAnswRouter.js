const express = require('express');
const { Answer, Question } = require('../db/models');

const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    // const latestQuestion = await Question.findOne({
    //   limit: 1,
    //   where: { key: Question.createdAt },
    //   order: [['createdAt', 'DESC']],
    // });
    const latestQuestion = await Question.findOne({
      order: [['id', 'DESC']],
    });
    const {
      rightAnswer, answer1, answer2, answer3,
    } = req.body;
    console.log(latestQuestion);
    // const result = Answer.create({ title, question_id: latestQuestion.id, isCorrect });
    const result = await Answer.bulkCreate([
      { title: rightAnswer, question_id: latestQuestion.id || null, isCorrect: true },
      { title: answer2, question_id: latestQuestion.id || null, isCorrect: false },
      { title: answer3, question_id: latestQuestion.id || null, isCorrect: false },
      { title: answer1, question_id: latestQuestion.id || null, isCorrect: false },
    ]);
    return res.json(result);
  } catch (error) {
    return console.log(error);
  }
});

module.exports = router;
