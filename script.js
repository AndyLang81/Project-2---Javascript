document.addEventListener("DOMContentLoaded", function() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];

    const buttons = document.querySelectorAll(".choice");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const userChoice = this.getAttribute("data-choice");
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            displayUserChoice(userChoice);
            displayComputerChoice(computerChoice);
            displayResult(userChoice, computerChoice);
        });
    });

    function displayUserChoice(userChoice) {
        const userChoiceImg = document.getElementById("user-choice-img");
        userChoiceImg.src = `images/${userChoice}.png`; // Assuming your images are stored in a folder named "images"
    }

    function displayComputerChoice(computerChoice) {
        const computerChoiceImg = document.getElementById("computer-choice-img");
        computerChoiceImg.src = `images/${computerChoice}.png`; // Assuming your images are stored in a folder named "images"
    }

    function displayResult(userChoice, computerChoice) {
        const resultMessageDiv = document.getElementById("result-message");
        const result = determineWinner(userChoice, computerChoice);
        if (result === "tie") {
            resultMessageDiv.textContent = "Chaos Reigns: It's a tie!";
        } else {
            const winner = result === userChoice ? "You" : "Computer";
            resultMessageDiv.textContent = `Chaos Reigns: ${winner} wins!`;
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