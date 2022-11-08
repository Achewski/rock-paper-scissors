let weapons = document.querySelectorAll(".weapon");
let roundResult = document.querySelector("#roundResult");
let game = document.querySelector("#game");
let gameOver = document.querySelector("#gameOver");
let playerScore = document.querySelector("#playerScore");
let cpuScore = document.querySelector("#cpuScore");

let p1Score = 0;
let p2Score = 0;

function playRound(p1Choice, p2Choice) {
	let winner;
	(p1Choice === "Rock" && p2Choice === "Scissors") ||
	(p1Choice === "Paper" && p2Choice === "Rock") ||
	(p1Choice === "Scissors" && p2Choice === "Paper") ?
		winner = "P1":
	(p2Choice === "Rock" && p1Choice === "Scissors") ||
	(p2Choice === "Paper" && p1Choice === "Rock") ||
	(p2Choice === "Scissors" && p1Choice === "Paper") ?
		winner = "P2":
	winner = "Tie";
	return winner;
}

function announceRoundWinner(winner, p1Choice, p2Choice) {
	(winner === "P1") ? (winnerAnnouncement = `You win! ${p1Choice} beats ${p2Choice}`):
	(winner === "P2") ? (winnerAnnouncement = `You lose! ${p2Choice} beats ${p1Choice}!`):
	(winnerAnnouncement = `It's a tie! You both chose ${p1Choice}!`);
	return winnerAnnouncement;
}

function announceGameWinner() {
	if (p1Score === 5) {
		return "You were the first to 5. You win! Click to play again!";
	} else {
		return "The computer was the first to 5. The computer wins! Click to play again!";
	}
}

function updateScore(winner) {
	if (winner === "P1") {
	p1Score++;
	} else if (winner === "P2") {
	p2Score++;
	} else {
		return
	}
}

function displayScore() {
	playerScore.textContent = `Player = ${p1Score}`;
	cpuScore.textContent = `Computer = ${p2Score}`;
}

function endGame() {
	if (p1Score === 5 || p2Score === 5) {
		gameReset.textContent = announceGameWinner();
		game.style.display = "none";
		gameOver.style.display = "flex";
	} else {
		return;
	}
}

function newGame() {
	gameOver.addEventListener("click", () => {
		p1Score = 0;
		p2Score = 0;
		displayScore();
		game.style.display = "flex";
		gameOver.style.display = "none";
	})
}

function getPlayerChoice(weaponID) {
	if (weaponID = "rock") {
		return "Rock";
	} else if (weaponID = "paper") {
		return "Paper";
	} else if (weaponID = "scissors") {
		return "Scissors";
	} else {
		return;
	}
}

function getCpuChoice() {
	let options = ["Rock", "Paper", "Scissors"]
	let randomOption = Math.floor(Math.random() * options.length);
	return options[randomOption];
}

weapons.forEach(weapon => weapon.addEventListener("click", () => {
	let p1Choice = getPlayerChoice(weapon.id);
	let p2Choice = getCpuChoice();
	let winner = playRound(p1Choice, p2Choice);
	roundResult.textContent = announceRoundWinner(winner, p1Choice, p2Choice);
	updateScore(winner);
	displayScore();
	endGame();
	newGame();
}));