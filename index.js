let nRounds = 0;
let playerPoints = 0;
let robotPoints = 0;


function getComputerChoice() {
    let items = ["rock", "paper", "scissors"]
    return items[Math.floor((Math.random() * 3))]
}

function playRound(playerSelection, computerSelection) {
    //playerSelection = playerSelection.toLowerCase()

    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        return "player"
    } else if (playerSelection == computerSelection) {
        return "draw"
    } else {
        return "robot"
    }
}

function game(playerChoice) {
    nRounds++;

    let winner = playRound(playerChoice, getComputerChoice());

    if (winner == "player") {
        playerPoints++;
    } else if (winner == "robot") {
        robotPoints++;
    } else { nRounds-- }

    robotCaption.innerText = robotPoints;
    humanCaption.innerText = playerPoints;

    if (nRounds == 5) {
        if (playerPoints > robotPoints) {
            //return "PLAYER WINS"
            displayWinnerTag.innerText = "Player wins";
        } else {
            //return "ROBOT WINS"
            displayWinnerTag.innerText = "Robot wins";
        }

        playerPoints = 0;
        robotPoints = 0;
        nRounds = 0;
    }


}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

displayWinnerTag = document.querySelector('.displayWinner');
humanCaption = document.querySelector('.humanCaption');
robotCaption = document.querySelector('.robotCaption');

rockButton.addEventListener("click", function () { game("rock"); });
paperButton.addEventListener("click", function () { game("paper"); });
scissorsButton.addEventListener("click", function () { game("scissors"); });