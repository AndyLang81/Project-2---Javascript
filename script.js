document.addEventListener("DOMContentLoaded", function() {
    // array of choices: rock, paper, scissors, lizard, spock
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let userScore = 0; // player's score
    let computerScore = 0; // computer's score
    const winningScore = 10; // score required to win

    // event listeners for each choice button
    const buttons = document.querySelectorAll(".choice");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const userChoice = this.getAttribute("data-choice"); // get user's choice
            const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // randomly select computer's choice
            displayComputerChoice(computerChoice); // display computer's choice
            const result = determineWinner(userChoice, computerChoice); // determine winner
            updateScore(result); // update scores
            displayResult(userChoice, computerChoice, result); // display result
            checkWinner(); // check if there's a winner
        });
    });

    // display the computer's choice
    function displayComputerChoice(computerChoice) {
        const computerChoiceDiv = document.getElementById("computer-choice");
        computerChoiceDiv.textContent = computerChoice;
    }

    // determine the winner based on choices
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "tie"; // return tie if choices are the same
        }

        // define winning combinations
        const winningCombinations = {
            "rock": ["scissors", "lizard"],
            "paper": ["rock", "spock"],
            "scissors": ["paper", "lizard"],
            "lizard": ["paper", "spock"],
            "spock": ["rock", "scissors"]
        };

        // check if user's choice beats computer's choice
        if (winningCombinations[userChoice].includes(computerChoice)) {
            userScore++; // increment player's score
            return "user"; // return player as winner
        } else {
            computerScore++; // increment computer's score
            return "computer"; // return computer as winner
        }
    }

    // update the scores displayed
    function updateScore(result) {
        const userScoreDiv = document.getElementById("user-score");
        const computerScoreDiv = document.getElementById("computer-score");
        userScoreDiv.textContent = userScore; // update player's score
        computerScoreDiv.textContent = computerScore; // update computer's score
    }

    // display the result message
    function displayResult(userChoice, computerChoice, result) {
        const resultMessageDiv = document.getElementById("result-message");
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
        if (userScore === winningScore) {
            alert("Player wins the game!"); // display player wins message
            resetGame(); // reset the game
        } else if (computerScore === winningScore) {
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
});
