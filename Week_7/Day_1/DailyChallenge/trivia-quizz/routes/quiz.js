const express = require('express');
const router = express.Router();

// Questions du quiz
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// Variables en mémoire (à réinitialiser en production réelle via session ou DB)
let currentQuestionIndex = 0;
let score = 0;

// Démarrer le quiz (GET)
router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }
  res.json({
    question: triviaQuestions[currentQuestionIndex].question,
    number: currentQuestionIndex + 1,
  });
});

// Répondre à une question (POST)
router.post('/', (req, res) => {
  const userAnswer = req.body.answer;

  if (!userAnswer) {
    return res.status(400).json({ error: 'Answer is required' });
  }

  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
  if (isCorrect) score++;

  currentQuestionIndex++;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      correct: isCorrect,
      message: isCorrect ? 'Correct!' : `Incorrect. The correct answer was "${correctAnswer}"`,
      finished: true,
      redirect: '/quiz/score',
    });
  }

  res.json({
    correct: isCorrect,
    message: isCorrect ? 'Correct!' : `Incorrect. The correct answer was "${correctAnswer}"`,
    nextQuestion: triviaQuestions[currentQuestionIndex].question,
  });
});

// Affichage du score (GET)
router.get('/score', (req, res) => {
  const finalScore = score;
  const total = triviaQuestions.length;

  // Réinitialisation
  currentQuestionIndex = 0;
  score = 0;

  res.json({
    message: `Quiz completed! Your score: ${finalScore} out of ${total}`,
  });
});

module.exports = router;
