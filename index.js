let currentRound = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerSelection() {
    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 0) {
        return "Rock";
    }
    else if (randomNum == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerSelection();

    let roundResult = "";
    
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "Scissors") {
        roundResult = "You win! Rock beats Scissors";
        playerScore++;
    }
    else if (playerSelection == "rock" && computerSelection == "Paper") {
        roundResult = "You lose! Paper beats Rock";
        computerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper") {
        roundResult = "You win! Scissors beats Paper";
        playerScore++;

    }
    else if (playerSelection == "scissors" && computerSelection == "Rock") {
        roundResult = "You lose! Rock beats Scissors";
        computerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors") {
        roundResult = "You lose! Scissors beats Paper";
        computerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "Rock") {
        roundResult = "You win! Paper beats Rock";
        playerScore++;
    }
    else {
        roundResult = "You draw!"
    }
    
    if (currentRound === 5) {
        document.getElementById('roundResult').textContent = playerScore > computerScore ? "You win the game!!! Rise against the machines!" : "Computer wins the game! Better luck next time!";
        
        currentRound = 0;
        playerScore = 0;
        computerScore = 0;

        return;
    }
    
    currentRound += 1;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    
    document.getElementById('currentRound').textContent = currentRound;
    document.getElementById('roundResult').textContent = roundResult;
}
