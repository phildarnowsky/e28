let nGuesses;
let targetNumber;

const appendToFeedback = (text) => {
  const newP = document.createElement("p");
  newP.textContent = text;
  document.querySelector("#guess-feedback").appendChild(newP);
}

const badGuess = (guess, adjective) => {
  appendToFeedback(`${guess} was too ${adjective}. :(`);
  nGuesses--;
  updateGuessesRemaining();
  checkForLose();
}

const checkForLose = () => {
  if(nGuesses == 0) {
    appendToFeedback("Sorry, you're out of guesses!");
    appendToFeedback(`My number was ${targetNumber}.`);
    disableGuessing();
  }
}

const tooHigh = (guess) => {
  badGuess(guess, "high");
}

const tooLow = (guess) => {
  badGuess(guess, "low");
}

const win = (guess) => {
  disableGuessing();
  appendToFeedback(`You did it! It's ${guess}!`);
  document.querySelector("#guesses-remaining").textContent = "";
}

const disableGuessing = () => {
  document.querySelector("#make-guess").setAttribute("disabled", true);
}

const enableGuessing =  () => {
  document.querySelector("#make-guess").removeAttribute("disabled");
}


const makeGuess = (e) => {
  e.preventDefault();

  const guessField = document.querySelector('#player-guess');
  const guess = parseInt(guessField.value);
  if(guess > targetNumber) {
    tooHigh(guess);
  } else if (guess < targetNumber) {
    tooLow(guess);
  } else {
    win(guess);
  }
}

const chooseTargetNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
}

const updateGuessesRemaining = () => {
  const guessesRemaining = document.querySelector('#guesses-remaining');
  guessesRemaining.textContent = nGuesses > 0 ? `${nGuesses} guesses remaining.` : "";
}

const resetGame = () => {
  nGuesses = 7;
  targetNumber = chooseTargetNumber();
  console.log(`Reset to ${nGuesses}, ${targetNumber}`);
  document.querySelector("#guess-feedback").textContent = "";
  document.querySelector("#player-guess").value = "";
  updateGuessesRemaining();
  enableGuessing();
}

const initGame = () => {
  resetGame();

  document.querySelector('#make-guess').addEventListener('click', makeGuess);
  document.querySelector('#reset').addEventListener('click', resetGame);
}

initGame();
