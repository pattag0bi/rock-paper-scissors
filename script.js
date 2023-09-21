function getComputerChoice() {
  option = Math.trunc(Math.random() * 3) + 1;
  //console.log(option);

  if (option == 1) {
    parameter = "rock";
  } else if (option == 2) {
    parameter = "paper";
  } else if (option == 3) {
    parameter = "scissors";
  }

  return parameter;
}
let playerScore = 0;
let computerScore = 0;
let roundWinner;

function playRound(computerSelection, playerSelection) {
  console.log(
    `playerSelection: ${playerSelection}, computerSelection ${computerSelection}`
  );
  if (computerSelection == "rock") {
    if (playerSelection == "rock") console.log("round draw");
    else if ((playerSelection = "paper")) {
      playerScore += 1;
      roundWinner = "player";
      console.log(roundWinner + " " + "wins");
    } else if ((playerSelection = "scissors")) {
      computerScore += 1;
      roundWinner = "computer";
      console.log(roundWinner + " " + "wins");
    }
  } else if (computerSelection == "paper") {
    if (playerSelection == "rock") {
      computerScore += 1;
      roundWinner = "computer";
      console.log(roundWinner + " " + "wins");
    } else if ((playerSelection = "paper")) console.log("round draw");
    else if ((playerSelection = "scissors")) {
      playerScore += 1;
      roundWinner = "player";
      console.log(roundWinner + " " + "wins");
    }
  } else if (computerSelection == "scissors") {
    if (playerSelection == "rock") {
      playerScore += 1;
      roundWinner = "player";
      console.log(roundWinner + " " + "wins");
    } else if ((playerSelection = "paper")) {
      computerScore += 1;
      roundWinner = "computer";
      console.log(roundWinner + " " + "wins");
    } else if ((playerSelection = "scissors")) console.log("round draw");
  }

  console.log(`player score: ${playerScore}, computer score: ${computerScore}`);
}
let gameWinner;
function game() {
  for (let i = 1; i < 6; i++) {
    console.log(`round number : ${i}`);
    playRound(getComputerChoice(), "rock");
  }

  if (playerScore > computerScore) gameWinner = "player";
  else if (computerScore > playerScore) gameWinner = "computer";
  else gameWinner = "draw";

  console.log(`THE WINNER IS ${gameWinner}`);
  return 0;
}

console.log(game());
