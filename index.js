let currentRound = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerSelection() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    };

    const winningCombinations = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    return winningCombinations[playerSelection] === computerSelection ? "player" : "computer";
}

function playRound(playerSelection) {
    const computerSelection = getComputerSelection();

    let roundResult = "";

    const winner = determineWinner(playerSelection, computerSelection);

    if (winner === "player") {
        playerScore++;
        roundResult = `You win - ${playerSelection} beats ${computerSelection}!`;
    }
    else if (winner === "computer") {
        computerScore++;
        roundResult = `You lose - ${computerSelection} beats ${playerSelection}...`;
    }
    else {
        roundResult = "It's a draw!"
    };
    
    
    currentRound ++;
    updateTextContent(roundResult);

    if (currentRound === 5) {
        document.getElementById('roundResult').textContent = playerScore > computerScore
        ? "You win the game!!! Rise against the machines!" 
        : "Computer wins the game! Better luck next time!";
        
        resetGame();
    }
}

function updateTextContent(roundResult) {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('currentRound').textContent = currentRound;
    document.getElementById('roundResult').textContent = roundResult;
}

function resetGame() {
    currentRound = 0;
    playerScore = 0;
    computerScore = 0;
}