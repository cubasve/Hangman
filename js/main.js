/*-------CONSTANTS--------*/ 
const foodDishArray = ['perogies', 'lasagna', 'pho', 'poutine', 'sushi', 'pizza', 'kebab', 'falafel', 'burger'];


/*-------APP'S STATE (VARIABLES)--------*/ 
let randomWord; 
let guessedLetters; 
let wrongGuesses; 


/*-------CACHED ELEMENT REFERENCES--------*/ 
let guessEl = document.getElementById('letterBox'); 
let messageEl = document.getElementById('message'); 
let fillInBlanksEl = document.getElementById('answer'); 
let addLetterEl = document.getElementById('guessedLetters'); 

let emptyHangman = document.querySelector('.one.empty'); 
let headHangman = document.querySelector('.two.head');
let bodyHangman = document.querySelector('.three.body');
let armHangman = document.querySelector('.four.arm');
let twoArmHangman = document.querySelector('.five');
let footHangman = document.querySelector('.six.foot');
let fullHangman = document.querySelector('.seven.dead');


/*-------EVENT LISTENERS--------*/ 
document.getElementById('letterButton').addEventListener('click', guessLetterEventHandler);

document.getElementById('reset').addEventListener('click', initialize);


/*-------FUNCTIONS--------*/ 
initialize();

function initialize() {
    randomWord = foodDishArray[Math.floor(Math.random() * foodDishArray.length)].toUpperCase(); 
    guessedLetters = []; 
    wrongGuesses = 0; 
    addLetterEl.innerHTML = null; 
    guessEl.value = null; 
    messageEl.innerHTML = null; 
    emptyHangman.style.display = 'block'; 
    render();
}

function render() {
    letterButton.disabled = false;
    renderAnswerHTML(); 
    renderHangman(); 
    winOrLose();
}


function winOrLose() { 
    if (wrongGuesses === 6) {
        messageEl.innerHTML = 'YOU LOSE'; 
        fullHangman.style.display = 'block'; //fullHangman picture still shows eve if user keeps on guessing after they lost --> doesn't disappear
        return;
    }

    for (let i = 0; i < randomWord.length; i++) {
        if (!guessedLetters.includes(randomWord[i])) { 
            return false; 
        } 
    }
    messageEl.innerHTML = 'YOU WIN!';
    letterButton.disabled = true; 
    return true; 
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
    fillInBlanksEl.innerHTML = answerHTML.join(' ');
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
    fillInBlanksEl.innerHTML = answerHTML.join(' ');
}


function guessLetterEventHandler() {
    let letter = guessEl.value.toUpperCase();
    messageEl.innerHTML = null;
    guessEl.value = null;
    let rightCheck = false; 

    if (letter.length !== 1 || letter === null || isNaN(letter) === false) {
        messageEl.innerHTML = 'Please enter a single letter';
        letter = null; 
        return;
    } 

    for (let i = 0; i < guessedLetters.length; i++) { 
        if (letter === guessedLetters[i]) {
            messageEl.innerHTML = 'Already used this letter, enter another letter';
            letter = null;
            return;
        } 
    }

    if (letter.length === 1) {
        guessedLetters.push(letter);
        addLetterEl.innerHTML = guessedLetters.join(' , ');

        for (let i = 0; i < randomWord.length; i++) {
          if (randomWord[i].includes(letter)) {
            renderAnswerHTML();
            rightCheck = true; //got 1 correct
            messageEl.innerHTML = 'Good guess!';
          } 
        }
    }
    if (rightCheck === false) { 
        wrongGuesses++;
        messageEl.innerHTML = 'Try again!';
    }
    messageEl.innerHTML = null;
    letter = null; 
    render();
}


function renderHangman() { 
    emptyHangman.style.display = 'none';
    headHangman.style.display = 'none';
    bodyHangman.style.display = 'none';
    armHangman.style.display = 'none';
    twoArmHangman.style.display = 'none';
    footHangman.style.display = 'none';
    fullHangman.style.display = 'none';

    if (wrongGuesses === 0) { 
        emptyHangman.style.display = 'block';
    } else if (wrongGuesses === 1) { 
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




