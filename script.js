'use strict';

// this functions generates a random choice for the computer
const comp = function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const x = Math.floor(Math.random() * 3);
    console.log(options[x]);
}

let playerChoice = prompt('What do you choose? rock, paper or scissors?').toLowerCase();

// this function plays a single round of the game
function playGame (playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        console.log(`Draw. No win. 🤷🏻‍♀️`);
    } else if (playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`You win! ${playerSelection} beats ${computerSelection} 🥳`);
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection} ❌`);
    }
    
}

playGame(playerChoice, comp());
