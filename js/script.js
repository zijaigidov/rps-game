function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // Random integer in the interval 1-3
  const computerChoice =
    randomNumber === 1 ? 'rock' : randomNumber === 2 ? 'paper' : 'scissors';
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case computerSelection:
      return `It's a draw! Both players chose ${playerSelection}`;
    case 'rock':
      return computerSelection === 'paper'
        ? 'You lose! Paper beats rock'
        : 'You win! Rock beats scissors';
    case 'paper':
      return computerSelection === 'rock'
        ? 'You win! Paper beats rock'
        : 'You lose! Scissors beats paper';
    case 'scissors':
      return computerSelection === 'rock'
        ? 'You lose! Rock beats scissors'
        : 'You win! Scissors beats paper';
  }
}

function game() {
  let numberOfWins = 0;
  let numberOfDraws = 0;
  let numberOfLosses = 0;
  let playerSelection;
  let computerSelection;
}
