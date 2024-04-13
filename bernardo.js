// Jokenpô
// Player vs Computer

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let getRandom = Math.floor(Math.random()*3);
    if (getRandom === 0){
        console.log("Computer choose rock");
        alert("Computer chose Rock");
    } else if (getRandom === 1) {
        console.log("Computer choose paper");
        alert("Computer chose Paper");
    } else {
        console.log("Computer choose scissor");
        alert("Computer chose Scissor");
    }
    return getRandom;
}

function playerChoice() {
    let x = prompt("Mighty Player, choose your hand!");
    if (x === null) {
        alert("Game cancelled. Refresh the page to play again.");
        return false;
    }

    x = x.toLowerCase();
        if (x == "rock"){
            console.log("You choose Rock")
            alert("You choose Rock");
        } else if (x == "paper") {
            console.log("You choose Paper")
            alert("You choose Paper");
        } else if (x == "scissor"){
            console.log("You choose Scissor")
            alert("You choose Scissor");
        } else {
            console.log("I can't understand, please repeat your choice.");
            alert("I can't understand, please repeat your choice.");   
            return false;
        } 
    return x;
}

function singleRound() {
    let playerSelection;
    do {
        playerSelection = playerChoice();
    }
    while (playerSelection === false);

    let computerSelection = computerPlay();
    
    if (playerSelection == "rock") {
        if (computerSelection == 2) {
            console.log("You win! Rock wins of scissor");
            alert("You win! Rock wins of scissor");
            playerScore++;
        } else if (computerSelection == 1) {
            console.log("You lose! Paper beats rock"); 
            alert("You lose! Paper beats rock");
            computerScore++;
        } else {
            console.log("Ahhhwww. It's a draw");
            alert("Ahhhwww. It's a draw");
        }
    } else if (playerSelection == "scissor") {
        if (computerSelection == 1) {
            console.log("You win! Scissor wins of paper");
            alert("You win! Scissor wins of paper");
            playerScore++;
        } else if (computerSelection == 0) {
            console.log("You lose! Rock beats scissor"); 
            alert("You lose! Rock beats scissor");
            computerScore++;
        } else {
            console.log("Ahhhwww. It's a draw");
            alert("Ahhhwww. It's a draw");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == 0) {
            console.log("You win! Paper wins of rock");
            alert("You win! Paper wins of rock");
            playerScore++;
        } else if (computerSelection == 2) {
            console.log("You lose! Scissor beats paper"); 
            alert("You lose! Scissor beats paper");
            computerScore++;
        } else {
            console.log("Ahhhwww. It's a draw");
            alert("Ahhhwww. It's a draw");
        }
    }
}

function game() {
    for (i=1; i < 6; i++){
        singleRound();  
        if (i < 5 && playerScore < 3 && computerScore < 3) {
            alert("Score\n" + 
                    "Player   Computer\n" + 
                    "   " + playerScore + "    X    " + computerScore);  
            console.log("Score\n" + 
            "Player   Computer\n" + 
            "   " + playerScore + "    X    " + computerScore);
        } else {
            alert("FINAL SCORE\n" + 
                    "Player   Computer\n" + 
                    "   " + playerScore + "    X    " + computerScore);  
            console.log("FINAL SCORE\n" + 
                    "Player   Computer\n" + 
                    "   " + playerScore + "    X    " + computerScore);
            break;
        }

    }
    let newRound = confirm("Do you want to play a new game?"); 
        if (newRound){
            playerScore = 0;
            computerScore = 0;
            game();
        }
}

game()

