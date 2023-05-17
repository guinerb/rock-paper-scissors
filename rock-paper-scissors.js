let playerSelection;
let computerSelection;
let playerPoint = parseInt(document.querySelector('.player-point').textContent);
let computerPoint = parseInt(document.querySelector('.computer-point').textContent);

let buttons = document.querySelectorAll('button');
let handIcons = document.querySelectorAll('.hand-icon');

const winnerMessage = document.querySelector('#winner-msg');
const scoreMessage = document.createElement('p');

function disableBtns() {
    buttons.forEach((button) => {
        button.setAttribute('disabled', '');
        button.setAttribute('style', 'color: #919191;  border-color: #ccc');
    });

    handIcons.forEach(hand => {
        hand.setAttribute('style', 'color: #ccc');
    });
}

function showCounter(classString, textVar ) {
    document.querySelector(classString).textContent = textVar;
}

function winnerAnouncement(msg) {
    scoreMessage.textContent = msg;
    winnerMessage.appendChild(scoreMessage);
}

function getComputerChoice() {
    let randChoice = Math.floor((Math.random()*3)+1);
    let computerSelection;
    
    if (randChoice == 1) {
        computerSelection = "rock";
    } else if (randChoice == 2) {
        computerSelection = "paper";
    } else if (randChoice == 3) {
        computerSelection = "scissors";
    }
    
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
            computerSelection = getComputerChoice();
            if (playerSelection === computerSelection) {
                scoreMessage.textContent = "Tie! Nobody Wins";
                winnerMessage.appendChild(scoreMessage);
            } else if (
                playerSelection == "rock" & computerSelection == "scissors" ||
                playerSelection == "scissors" & computerSelection == "paper" ||
                playerSelection == "paper" & computerSelection == "rock"
                )
            {
                winnerAnouncement("You Win! " + playerSelection + " beats " + computerSelection);
                playerPoint+=1;
                showCounter('.player-point', playerPoint);
            } else {
                winnerAnouncement("You Lose! " + computerSelection + " beats " +  playerSelection);
                computerPoint+=1;           
                showCounter('.computer-point', computerPoint);
            }
            
            if (playerPoint === 5) {
                disableBtns();
                winnerAnouncement('You are The Winner! Please, reload the page to play again.');
            } else if (computerPoint === 5) {
                disableBtns();
                winnerAnouncement('You Lost this game! Please, reload the page to play again.');
            }
        
        });         
    });
}
playRound();