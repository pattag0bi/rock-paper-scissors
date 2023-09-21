// function playRound(computerSelection, playerSelection) {
//   console.log(
//     `playerSelection: ${playerSelection}, computerSelection ${computerSelection}`
//   );
//   if (computerSelection == "rock") {
//     if (playerSelection == "rock") console.log("round draw");
//     else if ((playerSelection = "paper")) {
//       playerScore += 1;
//       roundWinner = "player";
//       console.log(roundWinner + " " + "wins");
//     } else if ((playerSelection = "scissors")) {
//       computerScore += 1;
//       roundWinner = "computer";
//       console.log(roundWinner + " " + "wins");
//     }
//   } else if (computerSelection == "paper") {
//     if (playerSelection == "rock") {
//       computerScore += 1;
//       roundWinner = "computer";
//       console.log(roundWinner + " " + "wins");
//     } else if ((playerSelection = "paper")) console.log("round draw");
//     else if ((playerSelection = "scissors")) {
//       playerScore += 1;
//       roundWinner = "player";
//       console.log(roundWinner + " " + "wins");
//     }
//   } else if (computerSelection == "scissors") {
//     if (playerSelection == "rock") {
//       playerScore += 1;
//       roundWinner = "player";
//       console.log(roundWinner + " " + "wins");
//     } else if ((playerSelection = "paper")) {
//       computerScore += 1;
//       roundWinner = "computer";
//       console.log(roundWinner + " " + "wins");
//     } else if ((playerSelection = "scissors")) console.log("round draw");
//   }

//   console.log(`player score: ${playerScore}, computer score: ${computerScore}`);
// }
// let gameWinner;
// let i = 1;
// function game() {
//   let leader = Math.max(computerScore, playerScore);
//   // for (let i = 1; i < 6; i++) {
//   while (leader < 6) {
//     console.log(`round number : ${i}`);
//     let input = prompt("enter your choice");
//     playerSelection = input.toLowerCase();
//     playRound(getComputerChoice(), playerSelection);
//     i++;
//   }

//   if (playerScore == 5) gameWinner = "player";
//   else if (computerScore == 5) gameWinner = "computer";
//   else gameWinner = "draw";

//   console.log(`THE WINNER IS ${gameWinner}`);
//   return 0;
// }

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

let playerScore;
let computerScore;
let roundWinner;
let playerSelection;
let computerSelection;

function init() {
  playerScore = 0;
  computerScore = 0;

  playerScoreEl.textContent = `player : 0`;
  computerScoreEl.textContent = `computer : 0`;
  playerWeapon.textContent = "⍰";
  computerWeapon.textContent = "⍰";

  modalEl.classList.add("hidden");
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

init();

function playRound(computerSelection, playerSelection) {
  console.log(
    `playerSelection: ${playerSelection}, computerSelection ${computerSelection}`
  );
  if (computerSelection == "rock") {
    if (playerSelection == "rock") {
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
      console.log("round draw");
      scoreInfo.textContent = "its a tie!";
      scoreDesc.textContent = "scissors ties with scissors";
    }
  }

  playerScoreEl.textContent = `player : ${playerScore}`;
  computerScoreEl.textContent = `computer : ${computerScore}`;
}
