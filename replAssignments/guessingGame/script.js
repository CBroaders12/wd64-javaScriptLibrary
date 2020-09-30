/*
What is needed for a guessing game?

  1. A range for our user to guess between. This should be 1-10.
  2. A randomized computer answer.
  3. A user guess that will provide a prompt
  4. A guess count (for loop variable declaration)
  5. gameLost = false
  6. The user will have 3 guesses to guess the correct answer.

Logic

  1. A way to validate the user guess
  2. Check if the user guess === the computer answer and alert that he / she won
  3. If the user guess is greater than the computer answer - nudge him or her to guess lower
  4. If the user guess is lower than the computer answer - nudge him or her to guess higher
  5. Handle the case when a user loses

*** You will need to explore documentation on parseInt(), prompt, alert, Math.floor(), and Math.random()
*/

let number2Guess = Math.floor(Math.random() * 10) + 1;
let guessCount = 0;
gameLost = false;

alert("Let's play a guessing game! I'm thinking of a number between 1 and 10. You get 3 tries to guess it.")

while (!gameLost) {
  guessCount++;

  if (guessCount > 3) {
    gameLost = true;
    alert(`You lose! The number was ${number2Guess}`);
    break;
  }

  let userGuess = parseInt(prompt('Guess a number between 1 and 10'));

  alert(`you guessed ${userGuess}`)

  if (userGuess == number2Guess) {
    alert('You guessed the correct number! You win!');
    break;
  } else if (userGuess < number2Guess) {
    alert('Try guessing higher.');
  } else {
    alert('Try guessing lower.');
  }
}