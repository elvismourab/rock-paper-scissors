let playerScore = 0;
let computerScore = 0;

const jankenpon = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors',
}

const buttons = document.querySelectorAll('#options');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const humanSelection = e.target.value;
        playGame(humanSelection);
    });
});

function playGame(humanSelection) {
    const getComputerChoice = function () {
        let random = Math.random();
        if (random <= 0.33) return jankenpon.ROCK;
        if (random >= 0.66) return jankenpon.PAPER;
        return jankenpon.SCISSORS;
    }

    const playRound = (humanChoice, computerChoice) => {
        let result = `🤖 Computer chooses ${computerChoice}! `;

        if (humanChoice === jankenpon.ROCK && computerChoice === jankenpon.PAPER) {
            computerScore++;
            result += 'You lose! Paper beats Rock';
        }
        else if (humanChoice === jankenpon.PAPER && computerChoice === jankenpon.ROCK) {
            playerScore++;
            result += 'You win! Paper beats Rock';
        }
        else if (humanChoice === jankenpon.SCISSORS && computerChoice === jankenpon.ROCK) {
            computerScore++;
            result += 'You lose! Rock beats Scissors';
        }
        else if (humanChoice === jankenpon.ROCK && computerChoice === jankenpon.SCISSORS) {
            playerScore++;
            result += 'You win! Rock beats Scissors';
        }
        else if (humanChoice === jankenpon.PAPER && computerChoice === jankenpon.SCISSORS) {
            computerScore++;
            result += 'You lose! Scissors beats Paper';
        }
        else if (humanChoice === jankenpon.SCISSORS && computerChoice === jankenpon.PAPER) {
            playerScore++;
            result += 'You win! Scissors beats Paper';
        }
        else {
            result += "It's a draw!";
        }

        return result;
    }

    const displayScore = (result) => {
        const score = document.getElementById('score');
        score.textContent = '';
        score
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let h2 = document.createElement('h2');
        p1.textContent = result;
        p2.textContent = `Player: ${playerScore}`;
        p3.textContent = `Computer: ${computerScore}`;

        if (playerScore >= 5 || computerScore >= 5) {
            let winner = playerScore > computerScore ? 'YOU' : 'COMPUTER';
            h2.textContent = `${winner} WIN!`;
            playerScore = 0;
            computerScore = 0;
        }

        score.appendChild(p1);
        score.appendChild(p2);
        score.appendChild(p3);
        score.appendChild(h2);
    }

    const computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);
    displayScore(result);
}
