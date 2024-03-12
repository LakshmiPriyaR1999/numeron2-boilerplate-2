// Iteration 8: Making scoreboard functional
let score = 0;

function updateScore(newScore) {
  score += newScore;
  document.getElementById("score-board").textContent = score;
}

// Call updateScore() whenever the player earns points

