function getComputerChoice() {
    
    let randChoice = Math.floor((Math.random()*3)+1);
    
    let computerSelection = '';
    
    if (randChoice == 1) {
        computerSelection = "rock";
    } else if (randChoice == 2) {
        computerSelection = "paper";
    } else if (randChoice == 3) {
        computerSelection = "scissors";
    }
    
    return computerSelection;
}

function getPlayerSelection() {

    let playerSelection = prompt("Welcome to Rock, Paper, Scissors Game.");
    
    let gameOptions = "rock paper scissors";
    gameOptions.toLowerCase();

    if (playerSelection === null){
        return;
    }

    if (gameOptions.includes(playerSelection.toLowerCase().trim()) === false) {
        window.alert("Please, try again choosing between Rock, Paper or Scissors");
    } else {
        return playerSelection;
    }    
}
    

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();

    let scoreMessage = "";

    if (playerSelection == computerSelection) {
        scoreMessage = "Tie! Nobody Wins";
    } else if (playerSelection == "rock" & computerSelection == "scissors"){
        scoreMessage = "You Win! Rock beats Scissors";
    } else if (playerSelection == "scissors" & computerSelection == "paper") {
        scoreMessage = "You Win! Scissors beats Paper";
    } else if (playerSelection == "paper" & computerSelection == "rock") {
        scoreMessage = "You Win! Paper beats Rock";
    } else {
        scoreMessage = "You Lose!" + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    }

    return scoreMessage;
    
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let overallScore = 0;
    for (let i = 0; i < 5; i++) {
        overallScore = playRound();
        if (overallScore.includes("You Win")) {
            playerScore+=1;
            console.log(overallScore);
            console.log("Score :  " + playerScore + " X " + computerScore);
        } else if (overallScore.includes("You Lose")) {
            computerScore+=1;
            console.log(overallScore);
            console.log("Score :  " + playerScore + " X " + computerScore);
        } else if (overallScore.includes("Tie")) {
            console.log(overallScore);
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won!"  + playerScore + " X " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("Game Over. You Lost."  + playerScore + " X " + computerScore);
    } else if (playerScore == computerScore) {
        console.log("Tie! Nobody Wins!"  + playerScore + " X " + computerScore);
    }
}

game();