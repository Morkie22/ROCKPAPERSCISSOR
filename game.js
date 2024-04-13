const MAX_ROUNDS = 5;
let roundNumber;
let playerScore = 0;
let computerScore = 0;
let hasShownStartMessage = false;

function startGameSession() {
  roundNumber = 1;
  while (roundNumber <= MAX_ROUNDS) {
    // Show welcome message
    if (!hasShownStartMessage) {
      alert(
        `Welcome to Rock Paper Scissors!\n \nWe will be playing 5 rounds and whoever wins the most rounds wins the game (ties don't count!)`
      );
      hasShownStartMessage = true;
    }

    let playerSelection = getPlayerChoice();

    if (playerSelection === null) {
      if (confirm("Are you sure you want to quit?")) {
        alert("Goodbye!");
        return;
      } else {
        alert("Then let's keep going!");
        continue;
      }
    }

    playerSelection = playerSelection.toLowerCase().trim();
    if (!isValidChoice(playerSelection)) {
      alert("Invalid choice. Please type 'Rock', 'Paper', or 'Scissors'.");
      continue;
    }

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    alert(
      `Computer chose ${computerSelection}. ${result}\nCurrent Score - You: ${playerScore}, Computer: ${computerScore}`
    );
  }

  // Announce the game's conclusion
  alert(
    `Game Over - Final Score: You: ${playerScore}, Computer: ${computerScore}. ` +
      `${
        playerScore > computerScore
          ? "Congratulations! You won the game!"
          : "The computer won the game. Better luck next time!"
      }`
  );
}

function isValidChoice(choice) {
  return ["rock", "paper", "scissors"].includes(choice);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
  return prompt(
    `Round ${roundNumber}\nScore: PLAYER ${playerScore} - PC ${computerScore}\n=========\n Choose Rock, Paper, or Scissors:`
  );
}

function playRound(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    playerScore++;
    roundNumber++;
    return `You win! ${player} beats ${computer}.`;
  } else {
    computerScore++;
    roundNumber++;
    return `You lose! ${computer} beats ${player}.`;
  }
}

startGameSession();
