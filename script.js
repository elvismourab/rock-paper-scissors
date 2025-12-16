const buttons = document.querySelectorAll('#options');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const humanSelection = e.target.value;
        playGame(humanSelection);
    });
});

const jankenpon = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors',
}

function getComputerChoice() {
    let random = Math.random();
    if (random <= 0.33) return jankenpon.ROCK;
    if (random >= 0.66) return jankenpon.PAPER;
    return jankenpon.SCISSORS;
}

function getHumanChoice() {
    let choice = prompt('What is your choice?');
    return choice.trim().toLowerCase();
}

function playGame(humanSelection) {

    let humanScore = 0;
    let computerScore = 0;

    let playRound = (humanChoice, computerChoice) => {
        /* 
        rock + paper = paper
        rock + scissors = rock
        rock + rock = draw
        paper + rock = paper
        paper + scissors = scissors
        paper + paper = draw
        scissors + rock = rock
        scissors + paper = scissors
        scissors + scissors = draw
        */
        if (humanChoice === jankenpon.ROCK && computerChoice === jankenpon.PAPER) {
            computerScore++;
            return console.log('You lose! Paper beats Rock');
        }
        if (humanChoice === jankenpon.PAPER && computerChoice === jankenpon.ROCK) {
            humanScore++;
            return console.log('You win! Paper beats Rock');
        }
        if (humanChoice === jankenpon.SCISSORS && computerChoice === jankenpon.ROCK) {
            computerScore++;
            return console.log('You lose! Rock beats Scissors');
        }
        if (humanChoice === jankenpon.ROCK && computerChoice === jankenpon.SCISSORS) {
            humanScore++;
            return console.log('You win! Rock beats Scissors');
        }
        if (humanChoice === jankenpon.PAPER && computerChoice === jankenpon.SCISSORS) {
            computerScore++;
            return console.log('You lose! Scissors beats Paper');
        }
        if (humanChoice === jankenpon.SCISSORS && computerChoice === jankenpon.PAPER) {
            humanScore++;
            return console.log('You win! Scissors beats Paper');
        }
        return console.log("It's a draw!");
    }

    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
