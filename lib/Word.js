const Letter = require("./Letter")

// const orders = items.map(item => new Order(item));


// Word.js: Contains a class, Word, that depends on the Letter class.This is used to create an object representing the current word the user is attempting to guess.That means the class should define:

// An array of new Letter objects representing the letters of the underlying word


class Word {
    constructor(letters) {
        this.lettersArr = [];
        for (var i = 0; i < letters.length; i++) {
            var newLetter = new Letter(letters[i]);
            this.lettersArr.push(newLetter); 
        };
    };

    // A function that returns a string representing the word.This should call the function on each letter object(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

    displayWord() {
        var string;

        for (var i = 0; i < this.lettersArr.length; i++) {
            var char = this.lettersArr[i].toString();
            string += char;
        };

        return string;
    };

    // A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in Letter.js)

    guessLetter(char) {

        this.lettersArr.forEach(el => el.guess(char));

        for (var i = 0; i < this.lettersArr.length; i++) {
            if(this.lettersArr[i].guessed === true){
                return true;
            }
        };

        return false;
    };

    guessedCorrectly() {
        for (var i = 0; i < this.lettersArr.length; i++) {
            if (this.lettersArr[i].guessed === false) {
                return false;
            }
        }

        return true;
    };
    
};

const hello = new Word("hello");
hello.guessLetter("h");
hello.guessLetter("e");
hello.guessLetter("l");
hello.guessLetter("o");
console.log(hello.guessedCorrectly());
console.log(hello);

module.exports = Word;