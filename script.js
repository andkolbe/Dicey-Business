const diceArray = [];
//Create a class named Die that represents a single die
class Die {
    constructor() {
        this.value = Math.floor(Math.random() * 7);
        this.div = $(`<div class="square">${this.value}</div>`);
        $('.square-container').append(this.div);
        this.div.click(() => {
            this.roll();
        })
        this.div.dblclick(() => {
            this.div.remove();
        })
    }
    //Your class must have a method named roll that generates a random integer 1-6, 
    //sets the value property, and updates the div on the page with the new value.
    roll() {
        console.log('test');

    }
}




//When a new Die is created, it should automatically create a div, 
// call its roll method, and put the div on the screen
$('.generate').click(() => {

    let fuckYea = new Die();
    diceArray.push(fuckYea);
    console.log(diceArray);

    $('.reroll').click(() => {
        diceArray.forEach(die => {
            die.roll();
        })

    })
})
    $('.sum').click(() => {
        diceArray.reduce().push();
    })


