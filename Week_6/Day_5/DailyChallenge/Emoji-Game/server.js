const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🚗', name: 'Car' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '🎸', name: 'Guitar' },
  { emoji: '👻', name: 'Ghost' },
  { emoji: '🦄', name: 'Unicorn' },
  { emoji: '🏀', name: 'Basketball' }
];

// Score stocké en mémoire simple
let currentScore = 0;
let leaderboard = [];

// Fonction pour générer un quiz
function getQuiz() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  let options = [correct.name];

  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(random)) options.push(random);
  }

  // Mélanger les options
  options = options.sort(() => Math.random() - 0.5);

  return {
    emoji: correct.emoji,
    correctName: correct.name,
    options
  };
}

let currentQuestion = getQuiz();

// Route API : obtenir une question
app.get('/api/question', (req, res) => {
  currentQuestion = getQuiz();
  res.json({
    emoji: currentQuestion.emoji,
    options: currentQuestion.options
  });
});

// Route API : vérifier la réponse
app.post('/api/guess', (req, res) => {
  const guess = req.body.guess;
  const isCorrect = guess === currentQuestion.correctName;
  if (isCorrect) currentScore++;

  res.json({
    correct: isCorrect,
    correctAnswer: currentQuestion.correctName,
    score: currentScore
  });
});

// Route API : leaderboard
app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.post('/api/leaderboard', (req, res) => {
  const name = req.body.name;
  leaderboard.push({ name, score: currentScore });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 5); // top 5
  currentScore = 0;
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`🎮 Emoji Game lancé sur http://localhost:${PORT}`);
});
