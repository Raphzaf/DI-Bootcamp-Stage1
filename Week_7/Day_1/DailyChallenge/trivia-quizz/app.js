const express = require('express');
const app = express();
const quizRouter = require('./routes/quiz');

app.use(express.json());
app.use('/quiz', quizRouter);

app.listen(3000, () => {
  console.log('Trivia Quiz Game running at http://localhost:3000/quiz');
});
