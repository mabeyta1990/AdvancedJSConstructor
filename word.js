var letter = require('./letter.js');

function Word(target){
    this.target = target; 
    this.letters = [];
    this.found = false;

    this.getLetter = function(){
        for (var letterIndex=0; letterIndex < this.target.length; letterIndex++){
            this.letters.push(new letter(this.target[letterIndex]));
        }
    };
    
    this.findWord = function(){
        this.found = this.letters.every(function(currentLetter){
            return currentLetter.appear;
        });
        return this.found;
    };

    this.checkLetter = function(guessLetter) {
        var letterGuessed = 0;

        for (var letIndex = 0; letIndex < this.letters.length; letIndex++){
            if(this.letters[letIndex].charac == guessLetter){
                this.letters[letIndex].appear = true;
                letterGuessed++;
            }
        }
        return letterGuessed;
    };

    this.renderWord = function (){
        var string = '';
        for (var wordIndex = 0; wordIndex < this.letters.length; wordIndex){
            string += this.letters[wordIndex].letterRender();
        }
        return string;
    };
}

module.exports = Word;