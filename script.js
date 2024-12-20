function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore += 1;
      return "You Win!";
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      computerScore += 1;
      return "You Lose!";
    } else if (humanChoice === computerChoice) {
      return "It's a Tie!";
    } else {
      return "Invalid input!";
    }
  }

  const rockBtn = document.createElement("button");
  const paperBtn = document.createElement("button");
  const scissorsBtn = document.createElement("button");

  rockBtn.textContent = "Rock";
  paperBtn.textContent = "Paper";
  scissorsBtn.textContent = "Scissors";

  const choiceContainer = document.querySelector("div");
  choiceContainer.appendChild(rockBtn);
  choiceContainer.appendChild(paperBtn);
  choiceContainer.appendChild(scissorsBtn);

  const resultContainer = document.createElement("p");
  choiceContainer.appendChild(resultContainer);

  const scoreContainter = document.createElement("p");
  choiceContainer.appendChild(scoreContainter);

  rockBtn.addEventListener("click", () => {
    const result = playRound("rock", getComputerChoice());
    updateResult(result);
    updateScore();
  });

  paperBtn.addEventListener("click", () => {
    const result = playRound("paper", getComputerChoice());
    updateResult(result);
    updateScore();
  });

  scissorsBtn.addEventListener("click", () => {
    const result = playRound("scissors", getComputerChoice());
    updateResult(result);
    updateScore();
  });

  function updateResult(result) {
    resultContainer.textContent = result;
  }

  function updateScore() {
    scoreContainter.textContent = `Score: You - ${humanScore}, Computer - ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
      const winner = humanScore > computerScore ? "You Win!" : "Computer Win!";
      resultContainer.textContent = winner;
      humanScore = 0;
      computerScore = 0;
    }
  }
}

playGame();
