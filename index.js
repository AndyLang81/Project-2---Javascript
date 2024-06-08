document.addEventListener("DOMContentLoaded", function() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];

    const buttons = document.querySelectorAll(".choice");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const userChoice = this.getAttribute("data-choice");
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            displayComputerChoice(computerChoice);
            displayResult(userChoice, computerChoice);
        });
    });

    function displayComputerChoice(computerChoice) {
        const computerChoiceDiv = document.getElementById("computer-choice");
        computerChoiceDiv.textContent = computerChoice;
    }

    function displayResult(userChoice, computerChoice) {
        const resultMessageDiv = document.getElementById("result-message");
        const result = determineWinner(userChoice, computerChoice);
        if (result === "tie") {
            resultMessageDiv.textContent = "It's a tie!";
        } else {
            const winner = result === userChoice ? "You" : "Computer";
            resultMessageDiv.textContent = `${winner} wins!`;
        }
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
            return userChoice;
        }
        return computerChoice;
    }
});
