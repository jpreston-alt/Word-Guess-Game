// require modules
const Word = require("./lib/Word");
const randomWords = require("random-words");
const inquirer = require("inquirer");

let newWord;
let remGuesses;

init();

function init() {
    // reset guesses to 10
    remGuesses = 10;

    // generate new word
    newWord = new Word(randomWords());

    makeGuess();
};

function makeGuess() {
    display();

    inquire();
};

// inquirer prompt for guesses
// .then guessLetter & guessCorrectly
// if guessCorrectly game over display you win
// else prompt inquirer again & subtract one from remaining guesses
function inquire() {
    inquirer
        .prompt(
            {
                type: "input",
                name: "userGuess",
                message: "Guess a letter: "
            }
        )
        .then(function(data) {
            let { userGuess } = data;
            newWord.guessLetter(userGuess);
            trackGuesses();
            display();
            inquire();
        })
};

// keep track of guesses left
function trackGuesses() {
    if (remGuesses > 0) {
        remGuesses -= 1;
    } else {
        console.log("Game over! You ran out of guesses.")
    }
};

// function for displaying guesses and word/underscores to screen
function display() {
    let display = `
    You have ${remGuesses} guesses left. \n\n
    ${newWord.displayWord()}
    `;

    console.log(display);
};




