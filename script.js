"use strict";

// this functions generates a random choice for the computer
const comp = function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const x = Math.floor(Math.random() * 3);
  return options[x];
};

// this function get an input choice from the user via prompt
const playerChoice = function () {
  return prompt("What do you choose? rock, paper or scissors?").toLowerCase();
};

// this function plays a single round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Draw. No win. 🤷🏻‍♀️`;
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

console.log(playRound(playerChoice(), comp()));
console.log(playRound(playerChoice(), comp()));
console.log(playRound(playerChoice(), comp()));
