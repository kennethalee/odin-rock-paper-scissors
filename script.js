let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer chose: ${randomChoice}`);
    return randomChoice;
}

function getHumanChoice() {
    let human_choice = prompt("Choose your weapon: ").toLowerCase();
    console.log(`You chose: ${human_choice}`);
    return human_choice;
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const result = playRound(humanSelection, computerSelection);

console.log(result);
console.log(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);