const gameChoices = [`ROCK`, `PAPER`, `SCISSORS`];

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * gameChoices.length) + 1;
  return gameChoices[randomNumber - 1];
}

function playRound(playerChoice, computerChoice) {
  console.log(
    `Player chose ${playerChoice} and Computer chose ${computerChoice}`
  );
  if (playerChoice == computerChoice) {
    console.log(`It's a draw!`);
    return `DRAW`;
  } else if (
    (playerChoice === `ROCK` && computerChoice === `SCISSORS`) ||
    (playerChoice === `SCISSORS` && computerChoice === `PAPER`) ||
    (playerChoice === `PAPER` && computerChoice === `ROCK`)
  ) {
    console.log(`You win this round!`);
    return `WIN`;
  } else {
    console.log(`You lose this round!`);
    return `LOSE`;
  }
}

function playerPlay() {
  let playerChoice = prompt(
    `Please type in your choice:\n(Valid choices are: Rock, Paper and Scissors)`
  );
  if (!isValidPlayerChoice(playerChoice)) {
    if (playerChoice == null || playerChoice == ``) {
      playerChoice = "NULL";
    }
    alert(
      `Your choice of "${playerChoice}" is not valid. Please choose again...`
    );
    return null;
  } else {
    return playerChoice.toUpperCase();
  }
}

function isValidPlayerChoice(playerChoice) {
  if (playerChoice == null) {
    return false;
  }
  return gameChoices.includes(playerChoice.toUpperCase());
}

function game() {
  const TOTAL_GAMES = 5;
  let playerWins = 0;
  let computerWins = 0;

  console.log(
    `Welcome to JavaScript Rock Paper Scissors!
    The rules are simple:
    \t1. You'll play 5 games.
    \t2. Whoever wins the most out of 5 games wins!
    Rock > Scissors
    Scissors > Paper
    Paper > Rock`
  );

  for (let gamesPlayed = 1; gamesPlayed <= TOTAL_GAMES; gamesPlayed++) {
    let playerChoice;
    let computerChoice = computerPlay();

    while (!gameChoices.includes(playerChoice)) {
      playerChoice = playerPlay();
    }

    let result = playRound(playerChoice, computerChoice);
    if (result == "WIN") {
      playerWins++;
    } else if (result == "LOSE") {
      computerWins++;
    }
    console.log(
      `The score is: Player - ${playerWins} & Computer - ${computerWins}`
    );
  }
}

game();
