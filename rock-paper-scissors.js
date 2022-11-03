function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"]
    let randomOption = Math.floor(Math.random() * options.length);                                                      /* Get position of random string from options */
    return options[randomOption];                                                                                       /* Return string at position                  */
}

function playRound() {
    let result;
    let winnerDeclaration;
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Paper, scissors, or rock?");
        playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();           /* Correct capitalization of player input       */
    
    while (playerSelection != "Paper" && playerSelection != "Scissors" && playerSelection != "Rock") {                  /* Loop until player enters valid option        */
        playerSelection = prompt("Please only enter paper, scissors, or rock.");                                        /* Prompt player to enter valid option          */
        playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();           /* Correct capitalization of player input       */
    }

    (playerSelection == "Paper" && computerSelection == "Rock") ? result = "Win" :                                      /* Player wins                               */
    (playerSelection == "Scissors" && computerSelection == "Paper") ? result = "Win" :                                  /* Player wins                               */
    (playerSelection == "Rock" && computerSelection == "Scissors") ? result = "Win" :                                   /* Player wins                               */
    (playerSelection == computerSelection) ? result = "tie" :                                                           /* Player and computer chose the same option */
    result = "Lose";                                                                                                    /* Player loses                              */

    (result == "Win") ? winnerDeclaration = `You Win! ${playerSelection} beats ${computerSelection}!` :                 /*                                              */
    (result == "Lose") ? winnerDeclaration = `You Lose! ${computerSelection} beats ${playerSelection}!` :               /* Create winnerDeclaration message from result */
    winnerDeclaration = `It's a tie! You both chose ${playerSelection}!`;                                               /*                                              */
    return [winnerDeclaration, result];                                                                                 /* Return array with winnerDeclaration as [0] and result as [1] in an array*/
}

function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {                                                                                       /* Run 5 rounds                 */
        roundResult = playRound();
        console.log(roundResult[0]);                                                                                    /* Log round winner declaration */
        (roundResult[1] == "Win") ? wins++ :                                                                            /* Increment wins               */
        (roundResult[1] == "Lose") ? losses++ :                                                                         /* Increment losses             */
        ties++;                                                                                                         /* Increment ties               */
    }

    (wins > losses && wins > ties) ? console.log("Congratulations, you won the most rounds! You're the winner!") :      /*                                                               */
    (losses > wins && losses > ties) ? console.log("Oh no, you lost more than you won! The computer is the winner!") :  /* Declare game winner based on number of wins, losses, and ties */
    (ties > wins && wins === losses) ? console.log("You both won the same number of rounds. It's a tie!") :             /*                                                               */
    console.log("Unable to determine winner.");                                                                         /*                                                               */
}

game();