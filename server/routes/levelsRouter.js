const express = require('express');
const { Level } = require('../db/models');

const router = express.Router();

router.route('/Lev').get(async (req, res) => {
  try {
    const AllLevels = await Level.findAll();
    return res.json(AllLevels);
  } catch (error) {
    return console.log(error);
  }
});

// export async function allLeavels() {
//   const res = await Level.findAll();
//   return toJson(res);
// }

module.exports = router;
