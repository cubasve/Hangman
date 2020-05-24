/*-------CONSTANTS--------*/ 
const fruitArray = ['apple', 'banana', 'pear', 'grapes', 'blueberry', 'peach', 'honewydew', 'strawberries', 'orange'];
const vegArray = ['kale', 'potato', 'onion', 'pepper', 'tomato', 'squash', 'carrot', 'celery', 'beet', 'broccoli', 'spinach', 'zucchini' ];
const snackArray = ['popcorn', 'chocolate', 'candy', 'pretzel', 'granola', 'chips', 'muffin', 'biscuit' ];
const foodDishArray = ['perogies', 'lasagna', 'pho', 'poutine', 'sushi', 'souvlaki', 'pizza', 'kebab', 'falafel', 'burger'];

/*-------APP'S STATE (VARIABLES)--------*/ 
let answer = [];
let userMistakes = 0;
let maxMistakes = 6;

//correctWord = empty array
//user mistakes are 0 since they never started guessing
//max of mistakes is 6
//


/*-------CACHED ELEMENT REFERENCES--------*/ 
let randomWord = fruitArray[Math.floor(Math.random() * fruitArray.length)];



/*-------EVENT LISTENERS--------*/ 

//user clicks/ chooses category
//user clicks on button, response --> right? add letter to block - wrong? tell user --> deduct a mistake

let letter = document.getElementById('enterLett').value; //get value of user's input
document.getElementById('enterLett').value = null; //input is blank after letter is inserted

//user clicks on reset button
document.getElementById('reset').


/*-------FUNCTIONS--------*/ 

function correctGuess() {
    if (letter === )
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


function blankAnswer() {
    for (let i = 0; i < randomWord.length; i++) {
        answer[i] = '_'; //the letter is now an underscore for the user to guess
        answer.join(' '); //there is a space between each letter 
    }
}


function correctGuess() { //if guess is correct, add into answer, ALL letters, not just 1

}


function resetGame() {

}
function trackMistakes() {
    if (userMistakes < maxMistakes ) {
        //continue to guess
    } else if  (userMistakes === maxMistakes) {
        alert('Last Try!')
    } else {
        //end game
    }
}

function verifyInput() {
    if (letter.length > 1 || letter === null) {
        alert('Please enter a SINGLE letter');
    } else if (isNaN(letter) === true) { //returns true if value is NaN - can also use typeof letter !== 'number'
        alert('Please enter a LETTER');
    } 
}







