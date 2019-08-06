const lettersGuessed = document.getElementById('letters-guessed');
const chosenWord = document.getElementById('chosen-word');
const startGame = document.getElementById('start-game');
const restartGame = document.getElementById('restart-game');
const remainingGuesses = document.getElementById('remaining-guesses');
let userGuesses = [];
let pickedWord;
let pickedWordListOfLetters = [];
let guessableWords = ['austin', 'joel', 'sam'];

// This is the word that the computer chooses for the user to guess

// Utilize the .includes() functionality for an array to check if something is inside the array

window.onload = function() {
  pickedWord = guessableWords[Math.floor(Math.random() * guessableWords.length)];
  console.log(pickedWord);
  for (var i = 0; i < pickedWord.length; i++) {
    chosenWord.textContent += "_ ";
    // Taking the Picked Word and getting it into a list.
    pickedWordListOfLetters.push(pickedWord[i]);
    // End of List Conversion
    remainingGuesses.textContent = 14;
    console.log(pickedWordListOfLetters[i]);
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
      userGuesses.push(input);
      // Try and place the user guess in the right place.
      for (var i = 0; i < pickedWordListOfLetters.length; i++) {
        if (input === pickedWordListOfLetters[i]) {
          chosenWord.textContent[i] = input;
        }
      }
      //    
      for (var i = 0; i < userGuesses.length; i++) {
        if (lettersGuessed.textContent.includes(userGuesses[i])) {
          console.log('Already Exists');
        } else {
          lettersGuessed.textContent += userGuesses[i];
        }
      };
    }
   }
 });

 restartGame.addEventListener('click', () => {

 });
