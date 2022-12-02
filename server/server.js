const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { levelsRouter } = require('./routes/levelsRouter');
// const userRouter = require('./routes/userRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/user', userRouter);
app.use('/Lev', levelsRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
