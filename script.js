document.addEventListener("DOMContentLoaded", function() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let userScore = 0;
    let computerScore = 0;
    const winningScore = 10;

    const buttons = document.querySelectorAll(".choice");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const userChoice = this.getAttribute("data-choice");
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            displayComputerChoice(computerChoice);
            const result = determineWinner(userChoice, computerChoice);
            updateScore(result);
            displayResult(userChoice, computerChoice, result);
            checkWinner();
        });
    });

    function displayComputerChoice(computerChoice) {
        const computerChoiceDiv = document.getElementById("computer-choice");
        computerChoiceDiv.textContent = computerChoice;
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "tie";
        }
        if ((userChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
            (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
            (userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
            (userChoice === "lizard" && (computerChoice === "paper" || computerChoice === "spock")) ||
            (userChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissors"))) {
            userScore++;
            return "user";
        } else {
            computerScore++;
            return "computer";
        }
    }

    function updateScore(result) {
        const userScoreDiv = document.getElementById("user-score");
        const computerScoreDiv = document.getElementById("computer-score");
        userScoreDiv.textContent = userScore;
        computerScoreDiv.textContent = computerScore;
    }

    function displayResult(userChoice, computerChoice, result) {
        const resultMessageDiv = document.getElementById("result-message");
        if (result === "tie") {
            resultMessageDiv.textContent = "It's a tie!";
        } else {
            const winner = result === "user" ? "Player" : "Computer";
            resultMessageDiv.textContent = `${winner} wins with ${userChoice} against ${computerChoice}!`;
        }
    }

    function checkWinner() {
        if (userScore === winningScore) {
            alert("Player wins the game!");
            resetGame();
        } else if (computerScore === winningScore) {
            alert("Computer wins the game!");
            resetGame();
        }
    }

    function resetGame() {
        userScore = 0;
        computerScore = 0;
        updateScore();
    }
});
