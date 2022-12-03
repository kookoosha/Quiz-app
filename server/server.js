const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

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

app.get('/Que', (req, res) => {
  const a = {
    quoteText: 'Dont compromise yourself. You are all youve got.',
    quoteAuthor: 'Janis Joplin',
  };
  console.log(res);
  res.json(a);
});

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
