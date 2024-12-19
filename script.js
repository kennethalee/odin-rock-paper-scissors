function playGame() {
    let humanScore = 0
    let computerScore = 0

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        if (
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            humanScore += 1;
            return "You Win!";
        } else if (
            humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "rock"
        ) {
            computerScore += 1;
            return "You Lose!";
        } else if (humanChoice === computerChoice) {
            return "It's a Tie!"
        } else {
            return "Invalid input!"
        }
    }

    const rounds = 5;
    for (let i = 0; i < rounds; i++) {
        const humanChoice = prompt("Choose your weapon: ");
        const computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
        const result = playRound(humanChoice, computerChoice);
        console.log(result);
        console.log(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You Win!");
    } else if (humanScore < computerScore) {
        console.log("Computer Wins!");
    } else {
        console.log("It's a Draw!");
    }
}

playGame();