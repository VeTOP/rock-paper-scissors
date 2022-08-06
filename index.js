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

    console.log(playerPoints + " these are the player points for now")
    console.log(robotPoints + " these are the robot points for now")
    console.log(nRounds + " this is the round number...")

    if (nRounds == 5) {
        playerPoints = 0;
        robotPoints = 0;
        nRounds = 0;
        if (playerPoints > robotPoints) {
            //return "PLAYER WINS"
            console.log("PLAYER WINS")
        } else {
            //return "ROBOT WINS"
            console.log("ROBOT WINS")
        }
    }


}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener("click", function () { game("rock"); });
paperButton.addEventListener("click", function () { game("paper"); });
scissorsButton.addEventListener("click", function () { game("scissors"); });