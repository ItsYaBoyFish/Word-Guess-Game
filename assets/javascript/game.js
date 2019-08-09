//  --------------------- DOM Links ---------------------------
const lettersGuessed = document.getElementById('letters-guessed');
const chosenWord = document.getElementById('chosen-word');
const startGame = document.getElementById('start-game');
const restartGame = document.getElementById('restart-game');
const remainingGuesses = document.getElementById('remaining-guesses');
// ---------------------------------------------------------------

// ---------------------- Programmatic Variables -----------------
let userGuesses = [];
let pickedWord;
let guessableWords = ['austin', 'joel', 'sam'];
// ---------------------------------------------------------------

function pickingTheWord() {
  // This is the word that the computer chooses for the user to guess
  pickedWord = guessableWords[Math.floor(Math.random() * guessableWords.length)];
  console.log(pickedWord);
  for (var i = 0; i < pickedWord.length; i++) {
    chosenWord.textContent += "_ ";
  }
}

function inputEvaluation() {
  if (userGuesses.includes(input)) {
    console.log('That Guess Was Already Submitted')
  } else {
    userGuesses.push(input);
    for (var i = 0; i < userGuesses.length; i++) {
      if (lettersGuessed.textContent.includes(userGuesses[i])) {
      console.log('The array already has this value' +userGuesses[i]);
    } else {
      lettersGuessed.textContent += userGuesses[i];
    }
  }
  // Evaluate if the user types an input in that matches the picked word. 
  // for (var i = 0; i < pickedWord.length; i++) {
  //   if (input === pickedWord[i]) {
  //     console.log('Matched the picked word');
  //     for (var j = 0; j < chosenWord.length; j++) {
  //       chosenWord[i].textContent = input;
  //     }
  //     // pickedWord[i].textContent = input;
  //     console.log(pickedWord);
  //   } else {
  //     console.log('Did not match the picked word');
  //     chosenWord[i].textContent = '_ '
  //   }
  // }
  console.log(userGuesses);
}
}

  startGame.addEventListener('click', () => {
    remainingGuesses.textContent = 14;
    pickingTheWord();
    document.onkeyup = function(event) {
    // Gathering Input and Lowercasing it
     input = event.key;
     input = input.toLowerCase();
     console.log(input);
     inputEvaluation();   
    }
  });

 restartGame.addEventListener('click', () => {
  for (var i = 0; i < userGuesses.length; i++) {
  } 
 });
