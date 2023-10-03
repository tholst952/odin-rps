"use strict";

// this function generates a random choice for the computer
const comp = function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const x = Math.floor(Math.random() * 3);
  return options[x];
};

// this function gets an input choice from the user via prompt
const playerChoice = function () {
  return prompt("Choose one! rock, paper or scissors?").toLowerCase();
};

function game() {
  // Initial score counters
  let playerScore = 0;
  let compScore = 0;

  // Play a round of the game
  function playRound(player, comp) {
    if (player === comp) {
      console.log(`Draw. No win. 🤷🏻‍♀️`);
    } else if (player === "") {
      console.log(`Please choose a play: rock, paper or scissors`);
    } else if (
      (player === "paper" && comp === "rock") ||
      (player === "scissors" && comp === "paper") ||
      (player === "rock" && comp === "scissors")
    ) {
      playerScore++;
      console.log(
        `You win! ${player} beats ${comp} 🥳 Your current Score: ${playerScore}`
      );
    } else {
      compScore++;
      console.log(`You lose! ${comp} beats ${player} ❌`);
    }
  }

  // Using the while loop to play 5 rounds
  let i = 0;
  while (i < 5) {
    playRound(playerChoice(), comp());
    i++;
  }

  // Final scores output message
  console.log(`Final Scores--- You: ${playerScore} Computer: ${compScore}`);
  if (playerScore === compScore) {
    console.log(`It seems that we have a tie. ＼（〇_ｏ）／`);
  } else if (playerScore > compScore) {
    console.log(`Congrats, human! 🌟🤩🌾😊😎🌾🍀`);
  } else {
    console.log(`The computer is victorious. o((⊙﹏⊙))o.`);
  }
}

// Execute the function
game();
