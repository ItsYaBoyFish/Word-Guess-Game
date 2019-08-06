const lettersGuessed = document.getElementById('letters-guessed');
const chosenWord = document.getElementById('chosen-word');
const startGame = document.getElementById('start-game');
const restartGame = document.getElementById('restart-game');
let userGuesses = [];
let pickedWord;
let guessableWords = ['austin', 'joel', 'sam'];

// This is the word that the computer chooses for the user to guess

// Utilize the .includes() functionality for an array to check if something is inside the array

window.onload = function() {
  pickedWord = guessableWords[Math.floor(Math.random() * guessableWords.length)];
  console.log(pickedWord);
  for (var i = 0; i < pickedWord.length; i++) {
    chosenWord.textContent += "_ ";
  }
}
 startGame.addEventListener('click', () => {
   document.onkeyup = function(event) {
    // Gathering Input and Lowercasing it
      input = event.key;
     input = input.toLowerCase();
     console.log(input);
    // End of Gathering
    if (userGuesses.includes(input)) {
      console.log('That Guess Was Already Submitted')
    } else {
      userGuesses.push(input)
      for (var i = 0; i < userGuesses.length; i++) {
        if (lettersGuessed.textContent.includes(userGuesses[i])) {
          console.log('Already Exists');
        } else {
          lettersGuessed.textContent += userGuesses[i];
        }
      };
      console.log(userGuesses);
      // Add the subtraction of remaining guesses here.
    }
   }
 });

 restartGame.addEventListener('click', () => {

 });

