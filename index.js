function getComputerChoice(){
    let items = ["rock", "paper", "scissors"]
    return items[Math.floor((Math.random()*3))]
}

// This function returns the winner of the match
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    
    if ((playerSelection == "rock" && computerSelection=="scissors")|| (playerSelection == "paper" && computerSelection=="rock")|| (playerSelection == "scissors" && computerSelection=="paper")){
        return "player"
    } else if (playerSelection == computerSelection) {
        return "draw"
    } else {
        return "robot"
    }
  }



function game(){
    let playerPoints = 0;
    let robotPoints = 0;
    for (let i = 0; i < 5; i++) {
        let winner = playRound("scissors", getComputerChoice());
        if (winner == "player") {
            playerPoints ++;
        } else if (winner == "robot") {
            robotPoints++;
        } else {i--} 
    }

    console.log(playerPoints)
    console.log(robotPoints)

    if (playerPoints > robotPoints){
        return "PLAYER WINS"
    } else {
        return "ROBOT WINS"
    }
}

console.log(game())