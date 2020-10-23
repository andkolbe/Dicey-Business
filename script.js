
class Die {
    static collection = []; //placeholder for dice
    static rollEmUp() {
        Die.collection.forEach(die => die.roll()); //rolls through every individual die in the array
    }
    static addEmUp() {
        let answer = Die.collection.reduce((total, die) => (total + die.value), 0); // doesn't work with diceArray HALP
        alert(answer);
    }
    constructor() {
        this.value = Math.floor((Math.random() * 6) + 1); //prevents 0 from occuring
        this.div = $(`<div class="square">${this.value}</div>`);
        $('.square-container').append(this.div);
        this.div.click(() => {
            this.roll();
        })
        this.div.dblclick(() => {
            this.div.remove();
            let eachDie = Die.collection.indexOf(this);
            Die.collection.splice(eachDie, 1);
        })
        Die.collection.push(this);
    }

    roll() { //can be used outside of the Die object
        this.value = Math.floor((Math.random() * 6) + 1);
        this.div.text(this.value); //reflects new internal value
    }
}


$('.generate').click(() => new Die()); //pushes new die onto array with every click

$('.reroll').click(() => Die.rollEmUp());

$('.sum').click(() => Die.addEmUp());

