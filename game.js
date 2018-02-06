var prompt = require('prompt');
var Word = require('./word.js');
prompt.start();
console.log("Terminal Hangman");
console.log("Guess a letter");
console.log("---------------------------------");


game = {
    wordBank: ['choke', 'rope', 'knot', 'swing'],
    gamesWon: 0,
    guessesRemaining:10,
    currentWord: null,

    startGame: function (word) {
        this.resetGuesses();
        this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
        this.currentWord.getLetter();
        this.promptUser();
    },

    resetGuesses: function() {
        this.guessesRemaining = 10;
    },

    promptUser: function(){
        var self = this;
        prompt.get([guessLetter], function(err, result){
            console.log("You guessed: " + result.guessLetter);
            var wordGuesses = this.currentWord.checkLetter(result.guessLetter);

            if (wordGuesses == 0) {
                console.log("Wrong Guess!");
                self.guessesRemaining--;    
            }
            else {
                console.log("CORRECT");
                if (self.currentWord.findWord()){
                    console.log("YOU WIN");
                    return;
                }
            }

            console.log("Guesses remaining: " + self.guessesRemaining);
            if((self.guessesRemaining > 0) && (self.currentWord.found == false)){
                self.promptUser;
            }
            else if (self.guessesRemaining == 0){
                console.log("GAME OVER");
            }
            else {
                console.log(self.currentWord.renderWord());
            }
        });
    }
};

