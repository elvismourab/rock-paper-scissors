let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.random();
    if (random <= 0.33) return 'rock';
    if (random >= 0.66) return 'paper';
    return 'scissors';
}

function getHumanChoice() {
    let choice = prompt('What is your choice?');
    return choice.trim().toLowerCase();
}

function playRound(humanChoice, computerChoice) {
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
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        return console.log('You lose!Paper beats Rock');
    }
    if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        return console.log('You win!Paper beats Rock');
    }
    if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        return console.log('You lose!Rock beats Scissors');
    }
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        return console.log('You win!Rock beats Scissors');
    }
    if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        return console.log('You lose!Scissors beats Paper');
    }
    if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return console.log('You win!Scissors beats Paper');
    }
    return console.log("It's a draw!");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
