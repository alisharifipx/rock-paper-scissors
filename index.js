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

console.log(getComputerChoice())