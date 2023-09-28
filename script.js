'use strict';

const getComputerChoice = function () {
    const options = ['rock', 'paper', 'scissors'];
    const x = Math.floor(Math.random() * 3);
    console.log(options[x])
}

getComputerChoice()