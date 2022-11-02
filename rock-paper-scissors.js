function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"]
    let randomIndex = Math.floor(Math.random() * options.length);
    let randomOption = options[randomIndex];
    return randomOption;
}


const playerSelection = "Rock";
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    let result;

    (playerSelection == "Paper" && computerSelection == "Rock") ? result = "Win" :
    (playerSelection == "Scissors" && computerSelection == "Paper") ? result = "Win" :
    (playerSelection == "Rock" && computerSelection == "Scissors") ? result = "Win" :
    (playerSelection == computerSelection) ? result = "Draw" :
    result = "Lose";

    let winnerDeclaration;
    
    result == "Win" ? winnerDeclaration = `You Win! ${playerSelection} beats ${computerSelection}!` : 
    result == "Lose" ? winnerDeclaration = `You Lose! ${computerSelection} beats ${playerSelection}!` :
    winnerDeclaration = `It's a draw! You both chose ${playerSelection}!`;
    return winnerDeclaration;
}

console.log(playRound(playerSelection, computerSelection));