// array of choices: rock, paper, scissors, lizard, spock
const CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
let userScore = 0; // player's score
let computerScore = 0; // computer's score
const WINNING_SCORE = 10; // score required to win

const WINNING_COMBINATIONS = {
    "rock": ["scissors", "lizard"],
    "paper": ["rock", "spock"],
    "scissors": ["paper", "lizard"],
    "lizard": ["paper", "spock"],
    "spock": ["rock", "scissors"]
};

// event listeners for each choice button
function initializeGame() {
    let buttons = document.querySelectorAll(".choice");
    buttons.forEach(button => {
        button.addEventListener("click", initializeSelection);
    });
}

// display the computer's choice
function displayComputerChoice(computerChoice) {
    let computerChoiceDiv = document.getElementById("computer-choice");
    computerChoiceDiv.textContent = computerChoice;
}

// determine the winner based on choices
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie"; // return tie if choices are the same
    }

    // check if user's choice beats computer's choice
    if (WINNING_COMBINATIONS[userChoice].includes(computerChoice)) {
        userScore++; // increment player's score
        return "user"; // return player as winner
    } else {
        computerScore++; // increment computer's score
        return "computer"; // return computer as winner
    }
}

// update the scores displayed
function updateScore(result) {
    let userScoreDiv = document.getElementById("user-score");
    let computerScoreDiv = document.getElementById("computer-score");
    userScoreDiv.textContent = userScore; // update player's score
    computerScoreDiv.textContent = computerScore; // update computer's score
}

// display the result message
function displayResult(userChoice, computerChoice, result) {
    let resultMessageDiv = document.getElementById("result-message");
    if (result === "tie") {
        resultMessageDiv.textContent = "It's a tie!"; // display tie message
    } else if (result === "user") {
        resultMessageDiv.textContent = `Player's ${userChoice} beats Computer's ${computerChoice}!`; // display player wins message
    } else {
        resultMessageDiv.textContent = `Computer's ${computerChoice} beats Player's ${userChoice}!`; // display computer wins message
    }
}

// check if there's a winner
function checkWinner() {
    if (userScore === WINNING_SCORE) {
        alert("Player wins the game!"); // display player wins message
        resetGame(); // reset the game
    } else if (computerScore === WINNING_SCORE) {
        alert("Computer wins the game!"); // display computer wins message
        resetGame(); // reset the game
    }
}

// reset the game
function resetGame() {
    userScore = 0; // reset player's score
    computerScore = 0; // reset computer's score
    updateScore(); // update scores
}

// function to handle user selection
function initializeSelection(event) {
    let userChoice = event.target.getAttribute("data-choice"); // get user's choice
    let computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)]; // randomly select computer's choice
    displayComputerChoice(computerChoice); // display computer's choice
    let result = determineWinner(userChoice, computerChoice); // determine winner
    updateScore(result); // update scores
    displayResult(userChoice, computerChoice, result); // display result
    checkWinner(); // check for a winner
}

document.addEventListener("DOMContentLoaded", initializeGame);
