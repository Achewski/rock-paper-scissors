function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"]
    let randomOption = Math.floor(Math.random() * options.length);                                                       /* Get position of random string from options */
        randomOption = options[randomOption];                                                                            /* Convert from position to actual string at position */
    return randomOption;
}

function playRound() {
    let result;
    let winnerDeclaration;
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Paper, scissors, or rock?");
        playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();           /* Force correct capitalization of player input */
    
    while (playerSelection != "Paper" && playerSelection != "Scissors" && playerSelection != "Rock") {                  /*                                    */
        playerSelection = prompt("Please only enter paper, scissors, or rock.");                                        /* Ensure player selects valid option */
        playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();           /*                                    */
    }                                                                                                                   /*                                    */

    (playerSelection == "Paper" && computerSelection == "Rock") ? result = "Win" :                                      /* Player wins */
    (playerSelection == "Scissors" && computerSelection == "Paper") ? result = "Win" :                                  /* Player wins */
    (playerSelection == "Rock" && computerSelection == "Scissors") ? result = "Win" :                                   /* Player wins */
    (playerSelection == computerSelection) ? result = "Draw" :                                                          /* Player and computer chose the same option */
    result = "Lose";                                                                                                    /* Player loses */

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