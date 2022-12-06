const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const questionRouter = require('./routes/questionRouter');
const levelsRouter = require('./routes/levelsRouter');
const addQuestRouter = require('./routes/addQuestRouter');
const addAnswRouter = require('./routes/addAnswRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/que', questionRouter);
app.use('/levels', levelsRouter);
app.use('/addQuestion', addQuestRouter);
app.use('/addAnswers', addAnswRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
