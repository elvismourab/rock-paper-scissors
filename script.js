let playerScore = 0;
let computerScore = 0;
let gameEnded = false;

const choices = ['ROCK', 'PAPER', 'SCISSORS'];

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultMessageDisplay = document.getElementById('result-message');
const finalWinnerDisplay = document.getElementById('final-winner');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (gameEnded) {
            resetGame();
        }
        playRound(button.value, getComputerChoice());
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    let result = `🤖 Computer chose ${computerChoice}! `;

    if (humanChoice === computerChoice) {
        result += "It's a draw!";
    } else if (
        (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (humanChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ) {
        playerScore++;
        result += 'You win! ' + humanChoice + ' beats ' + computerChoice + '!';
    } else {
        computerScore++;
        result += 'You lose! ' + computerChoice + ' beats ' + humanChoice + '!';
    }

    updateUI(computerChoice, result);
    checkForWinner();
}

function updateUI(computerChoice, result) {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    computerChoiceDisplay.textContent = getComputerEmoji(computerChoice);
    resultMessageDisplay.textContent = result;
}

function checkForWinner() {
    if (playerScore >= 5 || computerScore >= 5) {
        const winner = playerScore > computerScore ? 'YOU' : 'COMPUTER';
        finalWinnerDisplay.textContent = `${winner} WIN THE GAME!`;
        gameEnded = true;
        resultMessageDisplay.textContent = 'Click any button to play again.';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameEnded = false;
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    resultMessageDisplay.textContent = 'Choose your weapon!';
    finalWinnerDisplay.textContent = '';
}

function getComputerEmoji(computerChoice) {
    if (computerChoice === 'ROCK') return '✊';
    if (computerChoice === 'PAPER') return '✋';
    if (computerChoice === 'SCISSORS') return '✌️';
}
