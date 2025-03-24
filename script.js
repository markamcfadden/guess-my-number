"use strict";

let secretNumber = Math.floor(Math.random() * 1000) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number guessed!";
    //winning guess
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //wrong guess
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

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 1000) + 1;
  document.querySelector(".number").textContent = secretNumber;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
