/*-------CONSTANTS--------*/ 
// const fruitArray = ['apple', 'banana', 'pear', 'grape', 'blueberry', 'peach', 'honeydew', 'strawberry', 'orange'];
// const vegArray = ['kale', 'potato', 'onion', 'pepper', 'tomato', 'squash', 'carrot', 'celery', 'beet', 'broccoli', 'spinach', 'zucchini' ];
// const snackArray = ['popcorn', 'chocolate', 'candy', 'pretzel', 'granola', 'chips', 'muffin', 'biscuit' ];
const foodDishArray = ['perogies', 'lasagna', 'pho', 'poutine', 'sushi', 'souvlaki', 'pizza', 'kebab', 'falafel', 'burger'];

// const categories = [fruitArray, vegArray, snackArray, foodDishArray];


/*-------APP'S STATE (VARIABLES)--------*/ 
// let selectedCategory;
let randomWord = foodDishArray[Math.floor(Math.random() * foodDishArray.length)].toUpperCase();
// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let guessedLetters; //add letters the player already guessed
let answerWord;      //['__', '__', '__', '__', '__', '__', '__'];
let wrongGuesses; //just declare, didn't assign
//message or error message
//if you guessed all letters


/*-------CACHED ELEMENT REFERENCES--------*/ 
let guessEl = document.getElementById('letterBox'); //get value of user's input
let messageEl = document.getElementById('message');
let fillInBlanksEl = document.getElementById('answer');


/*-------EVENT LISTENERS--------*/ 
//Event listeners for each click:
//4 event listeners for each category
// document.getElementById('fruit').addEventListener('click', selectCategory);
// document.getElementById('veg').addEventListener('click', selectCategory);
// document.getElementById('snack').addEventListener('click', selectCategory);
// document.getElementById('dishes').addEventListener('click', selectCategory);

//1 event listener for enter a letter
// guessEl.addEventListener('click', guessLetterEventHandler); - not on letterBox, on letterButton
document.getElementById('letterButton').addEventListener('click', guessLetterEventHandler);

//1 event listener for reset button
document.getElementById('reset').addEventListener('click', initialize);


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

    // let randomWord = (categories[i][Math.floor(Math.random() * categories[i].length)].toUpperCase();  
    // selectedCategory(); //choose a category

    // let randomWord = foodDishArray[Math.floor(Math.random() * foodDishArray.length)].toUpperCase();
    guessedLetters = []; //don't redeclare --> just assign
    let wrongGuesses = 0; //game just started - no mistakes yet
    let answerWord = [];
    render();
}

// function selectCategory() {

// }

// function selectFruitArr() {
//     let randomWord = fruitArray[Math.floor(Math.random() * fruitArray.length)].toUpperCase();
// }
// function selectVegArr() {
//     let randomWord = vegArray[Math.floor(Math.random() * vegArray.length)].toUpperCase();
// }
// function selectSnackArr() {
//     let randomWord = snackArray[Math.floor(Math.random() * snackArray.length)].toUpperCase();
// }
// function selectDishArr() {
//     let randomWord = dishesArray[Math.floor(Math.random() * dishesArray.length)].toUpperCase();
// }

// function selectCategory() {
//     if (selectedCategory === categories[0]) {
//         let randomWord = fruitArray[Math.floor(Math.random() * fruitArray.length)].toUpperCase();
//     } else if (selectedCategory === categories[1]) {
//         let randomWord = vegArray[Math.floor(Math.random() * vegArray.length)].toUpperCase();
//     } else if (selectedCategory === categories[2]) {
//         let randomWord = snackArray[Math.floor(Math.random() * snackArray.length)].toUpperCase();
//     } else if (selectedCategory === categories[3]) {
//         let randomWord = foodDishArray[Math.floor(Math.random() * foodDishArray.length)].toUpperCase();
//     }
// }

function renderAnswerHTML() {
    let answerHTML = [];
    for (let i = 0; i < randomWord.length; i++) { //.includes() returns T/F
        if (guessedLetters.includes(randomWord[i])) { //if letter of random word is included in guessedLetters, we add it to answerHTML (empty array)
            answerHTML.push(randomWord[i]);
        } else {
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


function render() {
    //loop through answer word and change HTML to match the contents of that array (renderAnswerHTML)
    //show image based on how many wrong guesses
    //show list of guessed letters
    let answerWord = [];
    for (let i = 0; i < randomWord.length; i++) {
        answerWord.push('___');
    }
    fillInBlanksEl.innerHTML = answerWord.join(' ');
    // guessLetterEventHandler(); //verifies the input first --> it calls renderAnswerHTML()
}

    // let answerWord.length = randomWord.length; //Not sure about this line of code
    // for (let i = 0; i < answerWord.length; i++) {
    //     if (guessEl.value === randomWord[i]) {
    //         answerWord.innerHTML = guessLetters.value;
    //         guessedLetters.push(guessEl.value)
    //     } else {

    //     }
    // }
    // renderAnswerHTML();
    // // let answerWord.length = randomWord.length;
    // for (let i =0; i < answerWord.length; i++) {
    //     // let letter = document.getElementById('')
    //     if (guessLetters[i]) {
    //         answerWord.innerHTML = guessLetters.value;
    //         guessedLetters.push();//
    //     } else {

    //     }
    // }

function guessLetterEventHandler() {
    //validate that 1 letter was put in
    //add letter to guessed letters list
    //(if you use answer word array and letter is correct, adjust array)
    //if letter was not a correct guess, increment wrong guesses
    let letter = guessEl.value.toUpperCase();
    messageEl.innerHTML = null;
    letter.innerHTML = null;
    if (letter.length !== 1 || letter === null || isNaN(letter) === false) {
        messageEl.innerHTML = 'Please enter a single letter!';
    } else if (letter.length === 1) {
        guessedLetters.push(guessEl.value);
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i].includes(letter)) {
                messageEl.innerHTML = 'Good guess!';
            }
        }

        } else {
            messageEl.innerHTML = 'Try again!'
            wrongGuesses++;
            changeImages();
        }
    }
    messageEl.innerHTML = null;
    letter.innerHTML = null; //clears input box so user can enter in a new letter
}

function changeImages() {

    let wrongGuesses = 6;
    for (i = 0; i = 6; i++) {

    }
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
    fillInBlanksEl.innerHTML = answerHTML.join(' ');
}

//if you use answer word array and letter is correct, adjust the array
//if letter was not a correct guess, increment wrong guesses
// if (randomWord[i].includes(guessEl.value)) {
//     answerWord.
// }
// if (randomWord.includes(guessEl.value)) { //if the guess is in the randomWord
