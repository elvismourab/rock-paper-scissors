function getComputerChoice() {
    let random = Math.random();
    if (random <= 0.33) return 'rock';
    if (random >= 0.66) return 'paper';
    return 'scissors';
}

