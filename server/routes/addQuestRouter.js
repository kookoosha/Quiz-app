const express = require('express');
const { Question } = require('../db/models');

const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    console.log(req.body);
    const {
      title, img, code, level_id,
    } = req.body;
    const result = Question.create({
      title, img, code, level_id,
    });
    return res.json(result);
  } catch (error) {
    return console.log(error);
  }
});

module.exports = router;
