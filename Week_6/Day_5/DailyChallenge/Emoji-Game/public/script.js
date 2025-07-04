let currentEmoji = '';
let correctAnswer = '';

function loadQuestion() {
  fetch('/api/question')
    .then(res => res.json())
    .then(data => {
      currentEmoji = data.emoji;
      correctAnswer = null; // pour le serveur
      document.getElementById('emoji').textContent = currentEmoji;

      const optionsDiv = document.getElementById('options');
      optionsDiv.innerHTML = '';
      data.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => submitGuess(option);
        optionsDiv.appendChild(btn);
      });
    });
}

function submitGuess(guess) {
  fetch('/api/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guess })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('feedback').textContent = data.correct
        ? '✅ Correct!'
        : `❌ Wrong. It was ${data.correctAnswer}`;
      document.getElementById('score').textContent = data.score;
      if (data.score >= 5) {
        document.getElementById('end-game').style.display = 'block';
      } else {
        setTimeout(() => {
          document.getElementById('feedback').textContent = '';
          loadQuestion();
        }, 1000);
      }
    });
}

function submitScore() {
  const name = document.getElementById('playerName').value;
  fetch('/api/leaderboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  }).then(() => {
    loadLeaderboard();
    document.getElementById('end-game').style.display = 'none';
  });
}

function loadLeaderboard() {
  fetch('/api/leaderboard')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('leaderboard');
      list.innerHTML = '';
      data.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.name}: ${entry.score}`;
        list.appendChild(li);
      });
    });
}

// Initialisation
loadQuestion();
loadLeaderboard();
