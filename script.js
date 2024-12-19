humanScore = 0
computerScore = 0

function getComputerChoice(num=3) {
    let random_number = Math.floor(Math.random() * num);
    if (random_number === 0) {
        console.log("Computer chose: Rock");
    } else if (random_number === 1) {
        console.log("Computer chose: Paper");
    } else {
        console.log("Computer chose: Scissors");
    }
}

function getHumanChoice() {
    let human_choice = prompt("Choose you weapon: ")
    return `You chose: ${human_choice}`;
}

console.log(getComputerChoice());
console.log(getHumanChoice());