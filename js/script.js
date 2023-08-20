function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // Random integer in the interval 1-3
  const computerChoice =
    randomNumber === 1 ? 'Rock' : randomNumber === 2 ? 'Paper' : 'Scissors';
  return computerChoice;
}
