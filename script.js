let playerScore = 0;
let computerScore = 0;
let gameEnded = false;

const choices = ['rock', 'paper', 'scissors'];

// UI Elements
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultMessageDisplay = document.getElementById('result-message');
const finalWinnerDisplay = document.getElementById('final-winner');
const buttons = document.querySelectorAll('.btn');

// --- Event Listeners ---
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (gameEnded) {
            resetGame();
        }
        playRound(button.value, getComputerChoice());
    });
});

/**
 * Gets a random choice for the computer.
 * @returns {string} The computer's choice.
 */
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/**
 * Plays a single round of Rock, Paper, Scissors.
 * @param {string} humanChoice - The player's choice.
 * @param {string} computerChoice - The computer's choice.
 */
function playRound(humanChoice, computerChoice) {
    let result = `🤖 Computer chose ${computerChoice}! `;

    if (humanChoice === computerChoice) {
        result += "It's a draw!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        result += 'You win! ' + capitalize(humanChoice) + ' beats ' + computerChoice;
    } else {
        computerScore++;
        result += 'You lose! ' + capitalize(computerChoice) + ' beats ' + humanChoice;
    }

    updateUI(result);
    checkForWinner();
}

/**
 * Updates the UI with the current scores and result message.
 * @param {string} result - The message from the round.
 */
function updateUI(result) {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultMessageDisplay.textContent = result;
}

/**
 * Checks if either player has reached 5 points.
 */
function checkForWinner() {
    if (playerScore >= 5 || computerScore >= 5) {
        const winner = playerScore > computerScore ? 'YOU' : 'COMPUTER';
        finalWinnerDisplay.textContent = `${winner} WIN THE GAME!`;
        gameEnded = true;
        resultMessageDisplay.textContent = 'Click any button to play again.';
    }
}

/**
 * Resets the game to its initial state.
 */
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameEnded = false;
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    resultMessageDisplay.textContent = 'Choose your weapon!';
    finalWinnerDisplay.textContent = '';
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
