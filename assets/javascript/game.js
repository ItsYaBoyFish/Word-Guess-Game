const lettersGuessed = document.getElementById('letters-guessed');
const chosenWord = document.getElementById('chosen-word');
const startGame = document.getElementById('start-game');
const restartGame = document.getElementById('restart-game');
let userGuesses = [];
let pickedWord;

let guessableWords = ['austin', 'joel', 'sam'];

// This is the word that the computer chooses for the user to guess

window.onload = function() {
  pickedWord = guessableWords[Math.floor(Math.random() * guessableWords.length)];
  console.log(pickedWord);
  for (var i = 0; i < pickedWord.length; i++) {
    console.log(pickedWord[i]);
    chosenWord.textContent += "_ "
  }
}
 startGame.addEventListener('click', () => {
    document.onkeyup = function() {
    console.log('Game Started');
    userGuesses.push(event.key);
    for (var i = 0; i < userGuesses.length; i++) {
      console.log(userGuesses[i]);
      lettersGuessed.textContent = `${userGuesses} `;
    } 
    for (var i = 0; i < chosenWord.length; i++) {
      for (var j = 0; j < userGuesses.length; j++) {
        if (pickedWord[i] === userGuesses[j]) {
          chosenWord[i].textContent ="";
          chosenWord.textContent += userGuesses[j];
        } else {
        } 
      }
    }
  }
 });

 restartGame.addEventListener('click', () => {
   document.onkeyup = false;
   lettersGuessed.textContent = "";
  userGuesses = [];
 });


 for (var i = 0; i < pickedWord.length; i++) {
   for (var j = 0; j < userGuesses.length; j++) {
     if (pickedWord[i] === userGuesses[j]) {
       chosenWord.textContent = userGuesses[j]
     } else {

     }
   }
 }