function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"]
    let randomIndex = Math.floor(Math.random() * options.length);
    let randomOption = options[randomIndex];
    return randomOption;
}

function playRound() {
    let playerSelection = "Rock";
    let computerSelection = getComputerChoice();
    let result;
    let winnerDeclaration;

    (playerSelection == "Paper" && computerSelection == "Rock") ? result = "Win" :
    (playerSelection == "Scissors" && computerSelection == "Paper") ? result = "Win" :
    (playerSelection == "Rock" && computerSelection == "Scissors") ? result = "Win" :
    (playerSelection == computerSelection) ? result = "Draw" :
    result = "Lose";
    
    result == "Win" ? winnerDeclaration = `You Win! ${playerSelection} beats ${computerSelection}!` : 
    result == "Lose" ? winnerDeclaration = `You Lose! ${computerSelection} beats ${playerSelection}!` :
    winnerDeclaration = `It's a draw! You both chose ${playerSelection}!`;
    
    return winnerDeclaration;
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}

game();