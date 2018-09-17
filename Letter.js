function Letter(character, guessed) {


    this.character = character;
    this.guessed = guessed;//boolean

    this.placeholder = function () {
        //return the underlying character either or/ show or underline

        if (guessed === true) {
            console.log(character);
            return character;
        } else {
            return "_";
        }
    }

    this.compare = function (char) {
        if (char === this.character) {
            //make sure the lower and upper case is the same
            this.guessed = true;
        }
    }
}
// example of contructor''

//display underlying character or a blank placebholder such as an underscore
// function Player(name, position, offense, defense) {
//     this.name = name;
//     this.position = position;
//     this.offense = offense;
//     this.defense = defense;

module.exports = Letter