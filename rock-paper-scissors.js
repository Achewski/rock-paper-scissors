function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * options.length);
    let randomOption = options[randomIndex];
    return randomOption;
}