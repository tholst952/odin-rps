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

console.log(playRound(playerChoice(), comp()));
console.log(playRound(playerChoice(), comp()));
console.log(playRound(playerChoice(), comp()));
*/

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

  // Play 5 rounds of the game
  playRound(playerChoice(), comp());
  playRound(playerChoice(), comp());
  playRound(playerChoice(), comp());
  playRound(playerChoice(), comp());
  playRound(playerChoice(), comp());

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

////////////////////////////////////////////////////////////
// Tried using a loop, couldn't get it to work right..

// function game() {
//   let playerScore = 0;
//   let compScore = 0;

//   function playRound(player, comp) {
//     for (let i = 0; i <= 5; i++) {
//       if (player === comp) {
//         console.log(`Draw. No win. 🤷🏻‍♀️`);
//       } else if (player === "") {
//         console.log(`Please choose a play: rock, paper or scissors`);
//       } else if (
//         (player === "paper" && comp === "rock") ||
//         (player === "scissors" && comp === "paper") ||
//         (player === "rock" && comp === "scissors")
//       ) {
//         playerScore++;
//         console.log(
//           `You win! ${player} beats ${comp} 🥳 Your current Score: ${playerScore}`
//         );
//       } else {
//         compScore++;
//         console.log(`You lose! ${comp} beats ${player} ❌`);
//       }

//       if (i === 5) {
//         console.log(
//           `Final Scores--- You: ${playerScore} Computer: ${compScore}`
//         );
//         if (playerScore === compScore) {
//           console.log(`It seems that we have a tie. ＼（〇_ｏ）／`);
//         } else if (playerScore > compScore) {
//           console.log(`Congrats, human! 🌟🤩🌾😊😎🌾🍀`);
//         } else {
//           console.log(`The computer is victorious. o((⊙﹏⊙))o.`);
//         }
//       }
//     }
//   }
// }

// game();
