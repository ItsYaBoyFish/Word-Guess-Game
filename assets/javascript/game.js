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
   
 });

 restartGame.addEventListener('click', () => {

 });

