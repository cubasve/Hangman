/*-------CONSTANTS--------*/ 
const fruitArray = ['apple', 'banana', 'pear', 'grapes', 'blueberry', 'peach', 'honewydew', 'strawberries', 'orange'];
const vegArray = ['kale', 'potato', 'onion', 'pepper', 'tomato', 'squash', 'carrot', 'celery', 'beet', 'broccoli', 'spinach', 'zucchini' ];
const snackArray = ['popcorn', 'chocolate', 'candy', 'pretzel', 'granola', 'chips', 'muffin', 'biscuit' ];
const foodDishArray = ['perogies', 'lasagna', 'pho', 'poutine', 'sushi', 'souvlaki', 'pizza', 'kebab', 'falafel', 'burger'];

/*-------APP'S STATE (VARIABLES)--------*/ 
let randomWord = fruitArray[Math.floor(Math.random() * fruitArray.length)].toUpperCase();
// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let guessedLetters = []; //add letters the player already guessed
let answerWord = ['__', ]
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
let guess = document.getElementById('letterBox'); //get value of user's input
// document.getElementById('letterBox').value = null; //input is blank after letter is inserted


let fillInBlanks = document.getElementById('answer');

// //user clicks on reset button
// document.getElementById('reset').


/*-------EVENT LISTENERS--------*/ 

// document.querySelector('div').addEventListener('click', ) //incomplete

// document.getElementById('letterButton').addEventListener('click', blankAnswer);
// document.getElementById('reset').addEventListener('click', ); //incomplete




/*-------FUNCTIONS--------*/ 
function initialize() {
    //RESET THE GAME
    //picks a random word
    //sets guessed letters to empty array
    //sets wrong guesses to 0
    //render()
}

function renderAnswerHTML() {
    let answerHTML = [];
    for (let i = 0; i < randomWord.length; i++) {
        if (guessedLetters.includes(randomWord[i])) {
            answerHTML.push(randomWord[i]);
        } else {
            answerHTML.push('___');
        }
    }
    fillInBlanks.innerHTML = answerHTML.join(' ');
}

function render() {
    //loop through answer word and change HTML to match the contents of that array (renderAnswerHTML)
    //show image based on how many wrong guesses
    //show list of guessed letters
}








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

//reset the game
//user chooses letter --> if right: add it to all underscores VS if wrong: tell user
//update progress: how many are tries remaining, how many have they got, 
//

let randomWord = fruitArray[Math.floor(Math.random() * fruitArray.length)].toUpperCase();


function blankAnswer() {
    let answer = [];  //NOTE: Don't need answer here, it's already defined in the global scope
    for (let i = 0; i < randomWord.length; i++) {
        answer.push('__');
    }
    fillInBlanks.innerHTML = answer.join(' ');
}
blankAnswer();

// function blankAnswer() {     //blank for user to guess which letters
//     let answer = [];            
//     for (let i = 0; i < randomWord.length; i++) {  //i = each element in the randomWord
//         answer.replace('[i]', '___');
//         // answer[i] = '___'; //the letter is now an underscore for the user to guess

//     }
//     answer[i].join(' '); //there is a space between each letter 
//     fillInBlanks.innerHTML = answer;  //****************how to separate DOM from state here? ***********************
//     console.log('Hello');
// }


// function blankAnswer() {
//     let answer = [];
//     for (let i = 0; i< randomWord.length; i++) { //i = each letter in the randomWord
//         randomWord[i] = randomWord[i].replace('[i]', '___');
//         randomWord.join(' ');
//         console.log(randomWord)[i];
//     }
// answer.push(randomWord[i]);
// }
// blankAnswer();

// function blankAnswer() {
//     for (let i = 0; i < randomWord.length; i++) {
//         let answer = randomWord.replace('[i]', '__');
//         // let answer = answer + "_ ";
//         // console.log(answer);
//     }
//     console.log(answer);
//     return answer;
// }
// blankAnswer();

// function blankAnswer() {
//     let randomWord = randomWord.map()
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

function reset() {
    //input for letter is blank
    //new randomWord
    //********************REFERENCES THE APP's STATE VARIABLES AGAIN

    
}

// function correctGuess() { //if guess is correct, add into answer, ALL letters, not just 1
//     if (guess.length === 1) {
//         for (let i = 0; i < randomWord.length; i++) {
//             correctGuess();
//         }
//     } else if ()
// }







