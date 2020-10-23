const diceArray = []; //placeholder for dice

class Die {
    constructor() {
        this.value = Math.floor((Math.random() * 6) + 1); //prevents 0 from occuring
        this.div = $(`<div class="square">${this.value}</div>`);
        $('.square-container').append(this.div);
        this.div.click(() => {
            this.roll();
        })
        this.div.dblclick(() => {
            this.div.remove();
        })
    }

    roll() { //can be used outside of the Die object
        this.value = Math.floor((Math.random() * 6) + 1);
        this.div.text(this.value);
    }
}


$('.generate').click(() => {
    let diceBoy = new Die();
    diceArray.push(diceBoy); //pushes new die onto array with every click
})

$('.reroll').click(() => {
    diceArray.forEach(die => die.roll()); //rolls through every individual die in the array
})

$('.sum').click(() => {
    let answer = diceArray.reduce((acc, val) => (acc + val)); // doesn't work with diceArray HALP
    alert(answer);
});

