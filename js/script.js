function updatePlayerMove(event) {
  const moveName = event.currentTarget.id;
  const moveImage = event.currentTarget.querySelector('img');
  const newText = `Your choice: ${moveName}`;

  playerMove = moveName;
  playerMoveContainer.replaceChild(
    moveImage.cloneNode(),
    playerMoveContainer.firstElementChild,
  );
  playerText.textContent = newText;
}

// This function returns a random integer between and including the two integer arguments
function getRandomInt(lower, upper) {
  if (!Number.isInteger(lower) || !Number.isInteger(upper)) {
    return 'TypeError: Lower and/or upper bounds must be integers';
  }
  if (lower === upper) {
    return 'Error: Lower bound cannot equal upper bound';
  }
  if (lower > upper) {
    [lower, upper] = [upper, lower];
  }
  const range = upper - lower + 1;
  return Math.floor(Math.random() * range) + lower;
}

function getResult(playerMove, computerMove) {
  switch (playerMove) {
    case computerMove:
      return 'draw';
    case 'rock':
      return computerMove === 'scissors' ? 'win' : 'loss';
    case 'paper':
      return computerMove === 'rock' ? 'win' : 'loss';
    default:
      return computerMove === 'paper' ? 'win' : 'loss';
  }
}

function updateComputerMove() {
  const moveIndex = getRandomInt(0, 2);
  const moveName = buttons[moveIndex].id;
  const moveImage = buttons[moveIndex].firstElementChild;
  const newText = `Computer's choice: ${moveName}`;

  computerMove = moveName;
  computerMoveContainer.replaceChild(
    moveImage.cloneNode(),
    computerMoveContainer.firstElementChild,
  );
  computerText.textContent = newText;
}

function updateResult(result) {
  playerMoveContainer.classList.remove('win', 'loss', 'draw');
  computerMoveContainer.classList.remove('win', 'loss', 'draw');
  switch (result) {
    case 'win':
      const wins = +playerWins.textContent + 1;
      playerWins.textContent = wins;
      playerMoveContainer.classList.add('win');
      computerMoveContainer.classList.add('loss');
      break;
    case 'loss':
      let losses = +playerLosses.textContent + 1;
      playerLosses.textContent = losses;
      playerMoveContainer.classList.add('loss');
      computerMoveContainer.classList.add('win');
      break;
    default:
      playerMoveContainer.classList.add('draw');
      computerMoveContainer.classList.add('draw');
      break;
  }
}

function game(event) {
  updatePlayerMove(event);
  updateComputerMove();
  updateResult(getResult(playerMove, computerMove));
}

let playerMove;
let computerMove;
const playerMoveContainer = document.querySelector('.player .img-container');
const computerMoveContainer = document.querySelector(
  '.computer .img-container',
);
const playerText = document.getElementById('player-text');
const computerText = document.getElementById('computer-text');
const playerWins = document.getElementById('wins');
const playerLosses = document.getElementById('losses');

const buttons = document.querySelectorAll('.game-button');
buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => game(e));
});

const buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', () => {
  const EMPTY_IMAGE = document.createElement('img');
  EMPTY_IMAGE.setAttribute('src', '');
  EMPTY_IMAGE.setAttribute('alt', '');
  playerMoveContainer.firstElementChild.replaceWith(EMPTY_IMAGE.cloneNode());
  computerMoveContainer.firstElementChild.replaceWith(EMPTY_IMAGE.cloneNode());

  playerText.textContent = 'Your choice:';
  computerText.textContent = "Computer's choice:";

  playerWins.textContent = '0';
  playerLosses.textContent = '0';

  playerMoveContainer.classList.remove('win', 'loss', 'draw');
  computerMoveContainer.classList.remove('win', 'loss', 'draw');
});
