"use strict";

// this function generates a random choice for the computer
const comp = function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const x = Math.floor(Math.random() * 3);
  return options[x];
};

// this function get an input choice from the user via prompt
const playerChoice = function () {
  return prompt("Choose one! rock, paper or scissors?").toLowerCase();
};
/*
// this function plays a single round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Draw. No win. 🤷🏻‍♀️`;
  } else if (playerSelection === "") {
    return `Please choose a play: rock, paper or scissors`;
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection} 🥳`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection} ❌`;
  }
}
*/
// console.log(playRound(playerChoice(), comp()));
// console.log(playRound(playerChoice(), comp()));
// console.log(playRound(playerChoice(), comp()));

function game() {
  let playerScore = 0;
  let compScore = 0;

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      console.log(`Draw. No win. 🤷🏻‍♀️`);
    } else if (playerSelection === "") {
      console.log(`Please choose a play: rock, paper or scissors`);
    } else if (
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "rock" && computerSelection === "scissors")
    ) {
      playerScore++;
      console.log(
        `You win! ${playerSelection} beats ${computerSelection} 🥳 Your current Score: ${playerScore}`
      );
    } else {
      compScore++;
      console.log(`You lose! ${computerSelection} beats ${playerSelection} ❌`);
    }
  }

  playRound(playerChoice(), comp());
  playRound(playerChoice(), comp());
  playRound(playerChoice(), comp());

  console.log(`Final Scores--- You: ${playerScore} Computer: ${compScore}`);
  if (playerScore === compScore) {
    console.log(`It seems that we have a tie. ＼（〇_ｏ）／`);
  } else if (playerScore > compScore) {
    console.log(`Congrats, human! 🌟🤩🌾😊😎🌾🍀`);
  } else {
    console.log(`The computer is victorious. o((⊙﹏⊙))o.`);
  }
}

game();
