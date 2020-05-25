/*-------CONSTANTS--------*/ 
const fruitArray = ['apple', 'banana', 'pear', 'grape', 'blueberry', 'peach', 'honeydew', 'strawberry', 'orange'];
const vegArray = ['kale', 'potato', 'onion', 'pepper', 'tomato', 'squash', 'carrot', 'celery', 'beet', 'broccoli', 'spinach', 'zucchini' ];
const snackArray = ['popcorn', 'chocolate', 'candy', 'pretzel', 'granola', 'chips', 'muffin', 'biscuit' ];
const foodDishArray = ['perogies', 'lasagna', 'pho', 'poutine', 'sushi', 'souvlaki', 'pizza', 'kebab', 'falafel', 'burger'];

/*-------APP'S STATE (VARIABLES)--------*/ 
let randomWord;
// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let guessedLetters; //add letters the player already guessed
let answerWord = ['__', '__', '__', '__', '__', '__', '__'];
let wrongGuesses; //just declare, didn't assign
//message or error message
//if you guessed all letters

// let answer = [];
// let userMistakes = 0;
// let maxMistakes = 6;

//correctWord = empty array
//user mistakes are 0 since they never started guessing
//max of mistakes is 6
//


/*-------CACHED ELEMENT REFERENCES--------*/ 
//user clicks/ chooses category
//user clicks on button, response --> right? add letter to block - wrong? tell user --> deduct a mistake
let guessEl = document.getElementById('letterBox'); //get value of user's input
// document.getElementById('letterBox').value = null; //input is blank after letter is inserted
let messageEl = document.getElementById('message');


let fillInBlanks = document.getElementById('answer');

// //user clicks on reset button
// document.getElementById('reset').


/*-------EVENT LISTENERS--------*/ 

// document.querySelector('div').addEventListener('click', ) //incomplete

// document.getElementById('letterButton').addEventListener('click', blankAnswer);
// document.getElementById('reset').addEventListener('click', ); //incomplete




/*-------FUNCTIONS--------*/ 
initialize();

function initialize() {
    //RESET THE GAME
    //picks a random word
    //sets guessed letters to empty array
    //sets wrong guesses to 0
    //render()
    let randomWord = fruitArray[Math.floor(Math.random() * fruitArray.length)].toUpperCase();
    let guessedLetters = []; //empty array - player hasn't started guessing yet
    letWrongGuesses = 0; //game just started - no mistakes yet
    render();
}

function renderAnswerHTML() {
    let answerHTML = [];
    for (let i = 0; i < randomWord.length; i++) { //.includes() returns T/F
        if (guessedLetters.includes(randomWord[i])) { //if letter of random word is included in guessedLetters, we add it to answerHTML (empty array)
            answerHTML.push(randomWord[i]);
        } else {
            answerHTML.push('___');
        }
    }
    fillInBlanks.innerHTML = answerHTML.join(' ');
}
//We're looping through the letters of randomWord 
//if a letter in randomWord includes a player's guessed letter, randomWord's letter is pushed onto answerHTML
//if not, an underscore is pushed to answerHTML
//answerWord = ___ ___ ___ ___ ___ ___
//answerHTML: changes the answerWord as the user enters a guessedLetters


function render() {
    //loop through answer word and change HTML to match the contents of that array (renderAnswerHTML)
    //show image based on how many wrong guesses
    //show list of guessed letters

    guessLetterEventHandler(); //verifies the input first
    
    let answerWord.length = randomWord.length;
    for (let i = 0; i < answerWord.length; i++) {
        if (guessEl.value === randomWord[i]) {
            answerWord.innerHTML = guessLetters.value;
            guessedLetters.push(guessEl.value)
        } else {

        }
    }
    renderAnswerHTML();
    // let answerWord.length = randomWord.length;
    for (let i =0; i < answerWord.length; i++) {
        // let letter = document.getElementById('')
        if (guessLetters[i]) {
            answerWord.innerHTML = guessLetters.value;
            guessedLetters.push();//
        } else {

        }
    }
}

function guessLetterEventHandler() {
    //validate that 1 letter was put in
    //add letter to guessed letters list
    //(if you use answer word array and letter is correct, adjust array)
    //if letter was not a correct guess, increment wrong guesses
    if (guessEl.length === 1) {
        guessedLetters.push(guessEl.value); //adds it to the end of the array
        // messageEl.innerHTML = 'Good guess!';
        if (randomWord.includes(guessEl.value)) { //if the guess is in the randomWord
            
        }
    } else if (guessEl.length > 1 || guessEl=== null || isNaN(guessEl) === false) {
        messageEl.innerHTML = 'Please enter a SINGLE LETTER'; 
        wrongGuesses++;
    }
}

// if (guessedLetter[guessedLetter.length-1].includes(answerWord[i])) {
//     answerWord.push(guessedLetter[guessedLetters.length-1]);
//     messageEl.innerHTML = 'Good guess!';








// function selectCategory() { //pick a random word from the array the user chose
//     if (//user clicks animal) {
//         fruitArray[Math.floor(Math.random() * fruitArray.length)];
//     } else if (//user clicks food) {
//         vegArray[Math.floor(Math.random() * vegArray.length)];
//     } else if (//user clicks city) {
//         snackArray[Math.floor(Math.random() * snackArray.length)];
//     } else (//user clicks company) {
//         foodDishArray[Math.floor(Math.random() * foodDishArray.length)];
//     }
// }



// function makeAGuess() {
//     verifyGuesses();
//     while (guess.length === 1) {
//         correctGuesses();
//     }

// }
// guesses();

// function guesses() { //verify guesses (are they numbers, just 1 letter, etc.)
//     if (guess.length === 1) {
//         correctGuess();
//     } else { 
//         verifyGuesses(); 
//     }
// maxMistakes--;
// } 

function correctGuess() {
    for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === guess) {   //if (randomWord[i] === guess) {answer[i].push(guess)}
            answer[j] = guess.value;
        } else {
            alert('Try again with another letter. ');
            userMistakes++;
        }
    }
}
correctGuess();

function verifyGuess() {
    if (guess.length > 1 || guess.value === null) {
        alert('Please enter a SINGLE letter');
    } else if (isNaN(guess.value) === false) { //returns true if value is NaN - can also use typeof letter !== 'number'
        alert('Please enter a LETTER');
    } 
}
verifyGuess();

//********************Another version I did
// function verifyGuess('singleLett') 
    //   let singleLett = guess.value;
    //   if (singleLett.length === 1) {
    //     //undergo the function that takes it
    //   } else if (singleLett.length > 1 || singleLett === null ) {
    //     alert('Please enter a SINGLE letter')
    //   } else if (isNaN(singleLett) === false) {
    //     alert('Please enter a LETTER ')
    //   }
       
    // }
    // console.log(verifyGuess(e));

function trackMistakes() {
    if (userMistakes < maxMistakes ) {
        //continue to guess
    } else if  (userMistakes === maxMistakes) {
        alert('Last Try!')
    } else {
        //end game
    }
}