"use strict";
const headerEl = document.querySelector(".header");
const scoreInfo = document.querySelector(".score-info");
const scoreDesc = document.querySelector(".score-desc");
const playerWeapon = document.querySelector(".player-weapon");
const computerWeapon = document.querySelector(".computer-weapon");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const modalEl = document.querySelector(".modal");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const endGameMessage = document.querySelector(".endgame-message");
const overlay = document.querySelector(".overlay");
const resetBtn = document.querySelector(".btn-restart");

let playerScore;
let computerScore;
let roundWinner;
let playerSelection;
let computerSelection;
let leader;

function init() {
  playerScore = 0;
  computerScore = 0;

  playerScoreEl.textContent = `player : 0`;
  computerScoreEl.textContent = `computer : 0`;
  playerWeapon.textContent = "⍰";
  computerWeapon.textContent = "⍰";

  hideModal();
}

function getComputerChoice() {
  let option = Math.trunc(Math.random() * 3) + 1;
  //console.log(option);

  if (option == 1) {
    computerSelection = "rock";
    computerWeapon.textContent = "🪨";
  } else if (option == 2) {
    computerSelection = "paper";
    computerWeapon.textContent = "📄";
  } else if (option == 3) {
    computerSelection = "scissors";
    computerWeapon.textContent = "✂️";
  }

  return computerSelection;
}

function checkWinner(leader) {
  if (leader !== 5) {
    return true;
  } else if (leader == 5) {
    if (playerScore == 5 && computerScore == 5) {
      endGameMessage.textContent = "IT'S A TIE 👔";
      console.log("its a tie");
      showModal();
    } else if (computerScore == 5) {
      endGameMessage.textContent = "YOU LOSE 💩";
      console.log("you lose");
      showModal();
    } else if (playerScore == 5) {
      endGameMessage.textContent = "YOU WIN 😘";
      console.log("you win");
      showModal();
    }
  }
}

function showModal() {
  modalEl.style.display = "block";
  overlay.style.display = "block";
}

function hideModal() {
  modalEl.style.display = "none";
  overlay.style.display = "none";
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == "rock") {
    if (playerSelection == "rock") {
      playerScore += 1;
      computerScore += 1;
      scoreInfo.textContent = "its a tie!";
      scoreDesc.textContent = "rock ties with rock";
    } else if (playerSelection == "paper") {
      playerScore += 1;
      roundWinner = "player";
      scoreInfo.textContent = "you won !!";
      scoreDesc.textContent = "paper beats rock";
    } else if (playerSelection == "scissors") {
      computerScore += 1;
      roundWinner = "computer";
      scoreInfo.textContent = "you lost!";
      scoreDesc.textContent = "scissors is beaten by rock";
    }
  } else if (computerSelection == "paper") {
    if (playerSelection == "rock") {
      computerScore += 1;
      roundWinner = "computer";
      scoreInfo.textContent = "you lost!";
      scoreDesc.textContent = "rock is beaten by paper";
    } else if (playerSelection == "paper") {
      playerScore += 1;
      computerScore += 1;
      scoreInfo.textContent = "its a tie!";
      scoreDesc.textContent = "paper ties with paper";
    } else if (playerSelection == "scissors") {
      playerScore += 1;
      roundWinner = "player";
      scoreInfo.textContent = "you won !!";
      scoreDesc.textContent = "scissors beat paper";
    }
  } else if (computerSelection == "scissors") {
    if (playerSelection == "rock") {
      playerScore += 1;
      roundWinner = "player";
      scoreInfo.textContent = "you won !!";
      scoreDesc.textContent = "rock beats scissors";
    } else if (playerSelection == "paper") {
      computerScore += 1;
      roundWinner = "computer";
      scoreInfo.textContent = "you lost!";
      scoreDesc.textContent = "paper is beaten by scissors";
    } else if (playerSelection == "scissors") {
      playerScore += 1;
      computerScore += 1;
      scoreInfo.textContent = "its a tie!";
      scoreDesc.textContent = "scissors ties with scissors";
    }
  }

  playerScoreEl.textContent = `player : ${playerScore}`;
  computerScoreEl.textContent = `computer : ${computerScore}`;

  leader = Math.max(playerScore, computerScore);

  checkWinner(leader);
}

rockBtn.addEventListener("click", function () {
  playerWeapon.textContent = "🪨";
  playRound(getComputerChoice(), "rock");
  return playerSelection;
});

paperBtn.addEventListener("click", function () {
  playerWeapon.textContent = "📄";
  playRound(getComputerChoice(), "paper");
  return playerSelection;
});

scissorBtn.addEventListener("click", function () {
  playerWeapon.textContent = "✂️";
  playRound(getComputerChoice(), "scissors");
});

resetBtn.addEventListener("click", function () {
  init();
});

overlay.addEventListener("click", function () {
  init();
});

init();
