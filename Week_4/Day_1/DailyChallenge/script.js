const gameInfo = [
  { username: "john", team: "red", score: 5, items: ["ball", "book", "pen"] },
  { username: "becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"] },
  { username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"] },
  { username: "tyson", team: "green", score: 1, items: ["book", "pen"] },
];

const usernames = [];
gameInfo.forEach(player => {
  usernames.push(player.username + "!");
});

const winners = [];
gameInfo.forEach(player => {
  if (player.score > 5) {
    winners.push(player.username);
  }
});

let totalScore = 0;
gameInfo.forEach(player => {
  totalScore += player.score;
});

const output = `
1️⃣ Usernames with "!":
${JSON.stringify(usernames, null, 2)}

2️⃣ Winners with score > 5:
${JSON.stringify(winners, null, 2)}

3️⃣ Total Score:
${totalScore}
`;

document.getElementById("output").textContent = output;
