function updatePlayerMove(event) {
  const moveName = event.currentTarget.id;
  const moveImage = event.currentTarget.querySelector('img');
  const newText = `Your choice: ${moveName}`;

  playerMoveContainer.replaceChild(
    moveImage.cloneNode(),
    playerMoveContainer.firstChild,
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

function game(event) {
  updatePlayerMove(event);
}

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
  playerMoveContainer.firstChild.replaceWith(EMPTY_IMAGE.cloneNode());
  computerMoveContainer.firstChild.replaceWith(EMPTY_IMAGE.cloneNode());

  playerText.textContent = 'Your choice:';
  computerText.textContent = "Computer's choice:";

  playerWins.textContent = '0';
  playerLosses.textContent = '0';
});
