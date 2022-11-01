/* Get DOM Elements */
const firstButton = document.getElementById('btn-1');
const secondButton = document.getElementById('btn-2');
const thirdButton = document.getElementById('btn-3');

const firstGhost = document.getElementById('ghost-1');
const secondGhost = document.getElementById('ghost-2');
const thirdGhost = document.getElementById('ghost-3');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');
/* State */
const houses = ['house-1', 'house-2', 'house-3'];

let totalGuesses = 0;
let correctGuesses = 0;

/* Events */
firstButton.addEventListener('click', () => {
    const correctAnswer = generateAnswer();
    if (correctAnswer === 'house-1') {
        correctGuesses++;
    }
    calculateGuess(correctAnswer, 'house-1');
});

secondButton.addEventListener('click', () => {
    const correctAnswer = generateAnswer();
    if (correctAnswer === 'house-2') {
        correctGuesses++;
    }
    calculateGuess(correctAnswer, 'house-2');
});

thirdButton.addEventListener('click', () => {
    const correctAnswer = generateAnswer();
    if (correctAnswer === 'house-3') {
        correctGuesses++;
    }
    calculateGuess(correctAnswer, 'house-3');
});

function calculateGuess(answer, guess) {
    resetDisplay();
    totalGuesses++;
    if (answer === 'house-1') {
        firstGhost.classList.toggle('hidden');
    } else if (answer === 'house-2') {
        secondGhost.classList.toggle('hidden');
    } else {
        thirdGhost.classList.toggle('hidden');
    }
    updateScores();
}

/* Display Functions */

function resetDisplay() {
    firstGhost.classList.add('hidden');
    secondGhost.classList.add('hidden');
    thirdGhost.classList.add('hidden');
}

function generateAnswer() {
    const hauntedHouse = Math.floor(Math.random() * 3);
    const correctAnswer = houses[hauntedHouse];
    return correctAnswer;
}

function updateScores() {
    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}
