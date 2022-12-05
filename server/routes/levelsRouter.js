const express = require('express');
const { Level } = require('../db/models');

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const AllLevels = await Level.findAll();
    console.log(AllLevels);
    return res.json(AllLevels);
  } catch (error) {
    return console.log(error);
  }
});

module.exports = router;
