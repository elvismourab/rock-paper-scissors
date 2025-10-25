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
