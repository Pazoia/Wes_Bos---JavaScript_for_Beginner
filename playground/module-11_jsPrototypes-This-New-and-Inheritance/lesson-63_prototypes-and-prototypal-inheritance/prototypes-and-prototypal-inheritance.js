console.log("Prototypes and Prototypal inheritance");

function Pizza(toppings = [], customer) {
    console.log("Making a pizza");
    // save the toppings that were passed in,
    // to this instance of pizza
    this.toppings = toppings;
    this.customer = customer;
    this.id = Math.floor(Math.random() * 16777215).toString(16);
    this.slices = 10;
    // this.eat = function () {
    //     if (this.slices > 1) {
    //         this.slices -= 1;
    //         console.log(`${customer}, You now have ${this.slices} left!`);
    //         return this.slices;
    //     }
    //     console.log("Sorry! No slices left!");
    // };
}

Pizza.prototype.eat = function () {
    if (this.slices > 1) {
        this.slices -= 1;
        console.log(`${this.customer}, You now have ${this.slices} left!`);
        return this.slices;
    }
    console.log("Sorry! No slices left!");
};

Pizza.prototype.describe = function () {
    console.log(`
    This pizza belongs to ${this.customer},
    with the toppings: ${this.toppings.join(",")}
    ${this.customer.split(" ")[0]} has ${this.slices} slices left.
    `);
};

/*
    Below are two instances of the pizza function,
    create with the 'this' keyword to store the data
    that we passed in to each of them.
*/
const salamiPizza = new Pizza(["salami", "cheese", "olives"], "Paulo Azoia");
const tunaPizza = new Pizza(["tuna", "cheese", "sweet corn"], "Helen Azoia");
console.log(salamiPizza);
console.log(tunaPizza);

tunaPizza.eat();
tunaPizza.eat();
tunaPizza.eat();
tunaPizza.eat();
tunaPizza.eat();
tunaPizza.eat();
console.log("----------");
salamiPizza.eat();
salamiPizza.eat();
salamiPizza.eat();
salamiPizza.eat();

console.log("----------");

salamiPizza.describe();
tunaPizza.describe();

// console.clear();

console.log(String.prototype);
