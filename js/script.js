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

function game(event) {
  updatePlayerMove(event);
}

const playerMoveContainer = document.querySelector('.player .img-container');
const computerMoveContainer = document.querySelector(
  '.computer .img-container',
);
const playerText = document.getElementById('player-text');
const computerText = document.getElementById('computer-text');
const buttons = document.querySelectorAll('.game-button');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => game(e));
});
