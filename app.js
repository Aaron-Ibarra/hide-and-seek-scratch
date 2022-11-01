/* Get DOM Elements */
const firstButton = document.getElementById('btn-1');
const secondButton = document.getElementById('btn-2');
const thirdButton = document.getElementById('btn-3');

const firstGhost = document.getElementById('ghost-1');
const secondGhost = document.getElementById('ghost-2');
const thirdGhost = document.getElementById('ghost-3');

/* State */
const houses = ['house-1', 'house-2', 'house-3'];

let totalGuesses = 0;
let correctGuesses = 0;

/* Events */
firstButton.addEventListener('click', () => {
    const hauntedHouse = Math.floor(Math.random() * 3);
    const correctAnswer = houses[hauntedHouse];
    console.log(correctAnswer);
    // calculateGuess(correctAnswer, 'house-1');
});

secondButton.addEventListener('click', () => {
    const hauntedHouse = Math.floor(Math.random() * 3);
    const correctAnswer = houses[hauntedHouse];
    console.log(correctAnswer);
    // calculateGuess(correctAnswer, 'house-2');
});

thirdButton.addEventListener('click', () => {
    const hauntedHouse = Math.floor(Math.random() * 3);
    const correctAnswer = houses[hauntedHouse];
    console.log(correctAnswer);
    // calculateGuess(correctAnswer, 'house-3');
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
