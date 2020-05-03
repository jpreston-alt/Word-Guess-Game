const Letter = require("./Letter")

// Word.js: Contains a class, Word, that depends on the Letter class.This is used to create an object representing the current word the user is attempting to guess.That means the class should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word.This should call the function on each letter object(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in Letter.js)

class Word {
    constructor(letters) {
        this.letters = letters;
    }


    guessLetter() {
        var string;

        for (var i = 0; i < this.letters.length; i++) {
            var char = this.letters[i].toString();
            string += char;
        };

        return string;
    };

    guessedCorrectly(char) {
        for (var i = 0; i < this.letters.length; i++) {
            his.letters[i].guess(char);
        };
    };

};

module.exports = Word;