function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        message = "Rock";
    }
    else if (choice == 1) {
        message = "Paper";
    }
    else if (choice == 2) {
        message = "Scissors";
    };
    return message
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let result = ""
    if (playerSelection == "rock" && computerSelection == "Scissors") {
        result = "You win! Rock beats Scissors";
    }
    else if (playerSelection == "rock" && computerSelection == "Paper") {
        result = "You lose! Paper beats Rock"
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper") {
        result = "You win! Scissors beats Paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock") {
        result = "You lose! Rock beats Scissors"
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors") {
        result = "You lose! Scissors beats Paper"
    }
    else if (playerSelection == "paper" && computerSelection == "Rock") {
        result = "You win! Paper beats Rock"
    }
    else {
        result = "You draw!"
    }
    return result;
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))