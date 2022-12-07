const express = require('express');
const { Answer } = require('../db/models');

const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    const {
      title, img, code, level_id,
    } = req.body;
    const result = Answer.create({
      title, img, code, level_id,
    });
    return res.json(result);
  } catch (error) {
    return console.log(error);
  }
});

module.exports = router;
