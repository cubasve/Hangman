/*-------CONSTANTS--------*/ 
// const fruitArray = ['apple', 'banana', 'pear', 'grape', 'blueberry', 'peach', 'honeydew', 'orange'];
// const vegArray = ['kale', 'potato', 'onion', 'pepper', 'tomato', 'squash', 'carrot', 'celery', 'beet', 'broccoli', 'spinach', 'zucchini' ];
// const snackArray = ['popcorn', 'chocolate', 'candy', 'pretzel', 'granola', 'chips', 'muffin', 'biscuit' ];
const foodDishArray = ['perogies', 'lasagna', 'pho', 'poutine', 'sushi', 'pizza', 'kebab', 'falafel', 'burger'];



/*-------APP'S STATE (VARIABLES)--------*/ 

let randomWord;
let guessedLetters; //add letters the player already guessed
// let answerWord;      //['__', '__', '__', '__', '__', '__', '__'];
let wrongGuesses; 


/*-------CACHED ELEMENT REFERENCES--------*/ 
let guessEl = document.getElementById('letterBox'); //get value of user's input
let messageEl = document.getElementById('message');
let fillInBlanksEl = document.getElementById('answer');
let addLetterEl = document.getElementById('guessedLetters');

//references to images
let emptyHangman = document.querySelector('.one.empty');
let headHangman = document.querySelector('.two.head');
let bodyHangman = document.querySelector('.three.body');
let armHangman = document.querySelector('.four.arm');
let twoArmHangman = document.querySelector('.five');
let footHangman = document.querySelector('.six.foot');
let fullHangman = document.querySelector('.seven.dead');

/*-------EVENT LISTENERS--------*/ 

//1 event listener to input a letter
document.getElementById('letterButton').addEventListener('click', guessLetterEventHandler);

//1 event listener to restart the game
document.getElementById('reset').addEventListener('click', initialize);

/*-------FUNCTIONS--------*/ 


initialize();

function initialize() {
    //RESET THE GAME
    //picks a random word
    //sets guessed letters to empty array
    //sets wrong guesses to 0
    //render()

    //already declared in the global scope - don't redeclare them, just assign them
    randomWord = foodDishArray[Math.floor(Math.random() * foodDishArray.length)].toUpperCase(); 
    guessedLetters = []; //don't redeclare --> just assign
    wrongGuesses = 0; //game just started - no mistakes yet
    // answerWord = [];
    addLetterEl.innerHTML = null;
    guessEl.value = null;
    messageEl.innerHTML = null;
    emptyHangman.style.display = 'block';
    render();
}

function render() {
    //loop through answer word and change HTML to match the contents of that array (renderAnswerHTML)
    //show image based on how many wrong guesses
    //show list of guessed letters
    renderAnswerHTML();
    renderHangman();
    winGame();
    loseGame();
}

function winGame() {
    for (let i = 0; i < randomWord.length; i++) { //return: breaks out of function
        if (!guessedLetters.includes(randomWord[i])) {
            return false; //haven't won yet --> if you come across a letter that doesn't exist, you return false --> haven't won yet
        } //if false, it won't run below code
    }
    // return true; --> goes through rest of loop if return false
    messageEl.innerHTML = 'YOU WIN!'; 
    letterButton.disabled = true; //if all randomWord letters are included in guessedLetters, then you win
}
//if it finishes the loop without returning false, we can assume that there are no more spaces left
//if you go through whole loop and you enver return false, then all the letter were in guessed letters



function renderAnswerHTML() {
    let answerHTML = [];
    for (let i = 0; i < randomWord.length; i++) { //.includes() returns T/F
        if (guessedLetters.includes(randomWord[i])) { //if letter of random word is included in guessedLetters, we add it to answerHTML (empty array)
            messageEl.innerHTML = 'Good guess!';
            answerHTML.push(randomWord[i]);
        } else {
            messageEl.innerHTML = 'Try again!';
            answerHTML.push('___');
        }
    }
    fillInBlanksEl.innerHTML = answerHTML.join(' ');
}
//We're looping through the letters of randomWord 
//if a letter in randomWord includes a player's guessed letter, randomWord's letter is pushed onto answerHTML
//if not, an underscore is pushed to answerHTML
//answerWord = ___ ___ ___ ___ ___ ___
//answerHTML: changes the answerWord as the user enters a guessedLetters

function loseGame() {
    if (wrongGuesses === 6) {
        messageEl.innerHTML = 'YOU LOSE'; 
    }
}


function renderAnswerHTML() {
    let answerHTML = [];
    for (let i = 0; i < randomWord.length; i++) { //.includes() returns T/F
        if (guessedLetters.includes(randomWord[i])) { //if letter of random word is included in guessedLetters, we add it to answerHTML (empty array)
            // messageEl.innerHTML = 'Good guess!';
            answerHTML.push(randomWord[i]);
        } else {
            // messageEl.innerHTML = 'Try again!';
            answerHTML.push('___');
        }
    }
    fillInBlanksEl.innerHTML = answerHTML.join(' ');
}
//We're looping through the letters of randomWord 
//if a letter in randomWord includes a player's guessed letter, randomWord's letter is pushed onto answerHTML
//if not, an underscore is pushed to answerHTML
//answerWord = ___ ___ ___ ___ ___ ___
//answerHTML: changes the answerWord as the user enters a guessedLetters


function guessLetterEventHandler() {
    let letter = guessEl.value.toUpperCase();
    messageEl.innerHTML = null;
    guessEl.value = null;
    let rightCheck = false; //default - if they guess one of them right --> hasn't gotten any letters correct

    if (letter.length !== 1 || letter === null || isNaN(letter) === false) {
        console.log('Please enter a single letter'); //to test 
        messageEl.innerHTML = 'Please enter a single letter';
        letter = null; 
        return;
    } 

    for (let i = 0; i < guessedLetters.length; i++) { //acounts for previously used letters - based off of what was already inputted by user, not randomWord
        if (letter === guessedLetters[i]) {
            messageEl.innerHTML = 'Already used this letter, enter another letter';
            letter = null;
            return;
        } 
    }

    if (letter.length === 1) {
        // console.log(letter);
        guessedLetters.push(letter);
        addLetterEl.innerHTML = guessedLetters.join(' , ');
        // console.log(guessedLetters);

        for (let i = 0; i < randomWord.length; i++) {
          if (randomWord[i].includes(letter)) {
            renderAnswerHTML();
            rightCheck = true; //got 1 correct
            messageEl.innerHTML = 'Good guess!';
            // letter = null;
            // renderAnswerHTML();
          } 
        }
    }
    if (rightCheck === false) { //if correct, we switch to 'true' - if incorrect guess, it's false
        wrongGuesses++;
    }
    messageEl.innerHTML = null;
    letter = null; //clears input box so user can enter in a new letter
    render();
}


function renderHangman() { //take the state and translate state into DOM
    emptyHangman.style.display = 'none';
    headHangman.style.display = 'none';
    bodyHangman.style.display = 'none';
    armHangman.style.display = 'none';
    twoArmHangman.style.display = 'none';
    footHangman.style.display = 'none';
    fullHangman.style.display = 'none';


    if (wrongGuesses === 0) { //head -->  //hide or show images
        emptyHangman.style.display = 'block';
    } else if (wrongGuesses === 1) { //head -->  //hide or show images
        headHangman.style.display = 'block';
    } else if (wrongGuesses === 2) {
        bodyHangman.style.display = 'block';
    } else if (wrongGuesses === 3) {
        armHangman.style.display = 'block';
    } else if (wrongGuesses === 4) {
        twoArmHangman.style.display = 'block';
    } else if (wrongGuesses === 5) {
        footHangman.style.display = 'block';
    } else if (wrongGuesses === 6) {
        fullHangman.style.display = 'block';
    }

}
//reference to each hangman elements
//set all styles to display: none

// function renderHangman() {
//     if (wrongGuesses === 0) { //empty
//         document.querySelector('.one').src = "img/emptyHangman.png";
//     } else if (wrongGuesses === 1) { //head
//         document.querySelector('.two').src = "img/headHangman.png";
//     } else if (wrongGuesses === 2) { //body
//         document.querySelector('.three').src = "img/bodyHangman.png";
//     } else if (wrongGuesses === 3) { //1 arm
//         document.querySelector('.four').src = "img/oneArmHangman.png";
//     } else if (wrongGuesses === 4) { //2 arms
//         document.querySelector('.five').src = "img/twoArmHangman.png";
//     } else if (wrongGuesses === 5) { //1 leg
//         document.querySelector('.six').src = "img/oneFootHangman.png";
//     } else if (wrongGuesses === 6) { //full hangman
//         document.querySelector('.seven').src = "img/fullHangman.png";
//     } 
// }



