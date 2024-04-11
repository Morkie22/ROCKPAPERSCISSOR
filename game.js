(function startGameSession() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors:");
        if (playerSelection === null) {
            alert("Game cancelled. Refresh the page to play again.");
            return; // Exit if user cancels the prompt
        }

        playerSelection = playerSelection.toLowerCase();
        if (!isValidChoice(playerSelection)) {
            alert("Invalid choice. Please type 'Rock', 'Paper', or 'Scissors'.");
            continue; // Skip the loop iteration on invalid input
        }

        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        alert(`Computer chose ${computerSelection}. ${result}`);

        // Display the current score after each valid round
        alert(`Current Score - You: ${playerScore}, Computer: ${computerScore}`);
    }

    // Announce the game's conclusion
    alert(`Game Over - Final Score: You: ${playerScore}, Computer: ${computerScore}. ` +
          `${playerScore > computerScore ? "Congratulations! You won the game!" : "The computer won the game. Better luck next time!"}`);

    function isValidChoice(choice) {
        return ['rock', 'paper', 'scissors'].includes(choice);
    }

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playRound(player, computer) {
        if (player === computer) {
            return "It's a tie!";
        }

        if ((player === 'rock' && computer === 'scissors') ||
            (player === 'scissors' && computer === 'paper') ||
            (player === 'paper' && computer === 'rock')) {
            playerScore++;
            return `You win! ${player} beats ${computer}.`;
        } else {
            computerScore++;
            return `You lose! ${computer} beats ${player}.`;
        }
    }
})();