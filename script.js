"use strict";

let secretNumber = Math.floor(Math.random() * 1000) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ No number guessed!");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.boxShadow = "0 0 20px 5px #00ffff";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    score--;
    document.querySelector(".score").textContent = score;
    if (score > 0) {
      displayMessage(
        guess > secretNumber ? "📈 Guess too high!" : "📉 Guess too low!"
      );
    }
  } else {
    displayMessage("💥 Game over!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 1000) + 1;
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#2e1a47";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.boxShadow = "0 0 10px 2px #ff00cc";
});
