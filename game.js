// Generates a random choice for the computer
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Plays a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    const rules = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

    if (rules[playerSelection] === computerSelection) {
        return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } else {
        return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }
}

// Capitalizes the first letter of a string
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Runs the Rock, Paper, Scissors game, ensuring valid input and counting 5 successful rounds
function game() {
    let playerScore = 0, computerScore = 0;
    let roundsPlayed = 0;

    while (roundsPlayed < 5) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors:").trim();
        playerSelection = playerSelection.toLowerCase();
        const validChoices = ['rock', 'paper', 'scissors'];

        if (!validChoices.includes(playerSelection)) {
            console.log("Invalid choice. Please choose Rock, Paper, or Scissors.");
            continue;
        }

        const computerSelection = computerPlay().toLowerCase();
        console.log(`Computer chose: ${capitalize(computerSelection)}`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.startsWith("You Win")) {
            playerScore++;
        } else if (result.startsWith("You Lose")) {
            computerScore++;
        }

        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
        roundsPlayed++;
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > playerScore) {
        console.log("Oh no! The computer won the game. Try again?");
    } else {
        console.log("It's a tie! Everyone's a winner!");
    }
}
function startGameSession() {
    game(); // Start the game

    // After the game ends, ask if the player wants to play again
    let playAgain = confirm("Do you want to play again? Click OK to continue or Cancel to stop.");

    while (playAgain) {
        // Optional: Clear the console log before starting a new game
        // Note: This might not work in all browsers due to security restrictions
        console.clear();

        game(); // Start a new game

        // Ask again after the game ends
        playAgain = confirm("Do you want to play again? Click OK to continue or Cancel to stop.");
    }
}

// Call startGameSession to begin the game session.// 
startGameSession();