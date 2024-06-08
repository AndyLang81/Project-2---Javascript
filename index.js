document.addEventListener("DOMContentLoaded", function() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const results = {
        rock: { beats: ["scissors", "lizard"], losesTo: ["paper", "spock"] },
        paper: { beats: ["rock", "spock"], losesTo: ["scissors", "lizard"] },
        scissors: { beats: ["paper", "lizard"], losesTo: ["rock", "spock"] },
        lizard: { beats: ["paper", "spock"], losesTo: ["rock", "scissors"] },
        spock: { beats: ["rock", "scissors"], losesTo: ["paper", "lizard"] }
    };

    const buttons = document.querySelectorAll(".play-box");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const userChoice = this.getAttribute("data-choice");
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            displayChoices(userChoice, computerChoice);
            displayResult(userChoice, computerChoice);
        });
    });

    function displayChoices(userChoice, computerChoice) {
        document.getElementById("user-choice-img").src = `images/${userChoice}.png`;
        document.getElementById("computer-choice-img").src = `images/${computerChoice}.png`;
    }

    function displayResult(userChoice, computerChoice) {
        const result = determineWinner(userChoice, computerChoice);
        if (result === "tie") {
            document.getElementById("round-winner").textContent = "Chaos Reigns: It's a tie!";
        } else {
            const winner = result === userChoice ? "You" : "Computer";
            document.getElementById("round-winner").textContent = `Chaos Reigns: ${winner} wins!`;
        }
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "tie";
        }
        if (results[userChoice].beats.includes(computerChoice)) {
            return userChoice;
        }
        return computerChoice;
    }
});
