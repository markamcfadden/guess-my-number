"use strict";

const secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number guessed!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  } else if (guess > secretNumber || guess < secretNumber) {
    score--;
    document.querySelector(".score").textContent = score;
    if (score > 0) {
      if (guess > secretNumber) {
        document.querySelector(".message").textContent = "📈 Guess too high!";
      } else if (score < secretNumber) {
        document.querySelector(".message").textContent = "📉 Guess too low!";
      }
    } else {
      document.querySelector(".message").textContent = "Game over!";
    }
  }
});
