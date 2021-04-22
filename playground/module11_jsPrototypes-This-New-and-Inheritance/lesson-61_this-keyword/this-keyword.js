console.log("The 'this' keyword");

const button1 = document.querySelector(".one");
const button2 = document.querySelector(".two");

function tellMeAboutTheButton() {
    console.log("outside", this);
    setTimeout(() => {
        console.log("inside", this);
        this.textContent = "You Clicked Me";
    }, 1000);
}

button1.addEventListener("click", tellMeAboutTheButton);
button2.addEventListener("click", tellMeAboutTheButton);

function Pizza(toppings = [], customer) {
    console.log("Making a pizza");
    // save the toppings that were passed in,
    // to this instance of pizza
    this.toppings = toppings;
    this.customer = customer;
    this.id = Math.floor(Math.random() * 16777215).toString(16);
}

/*
    Below are two instances of the pizza function,
    create with the 'this' keyword to store the data
    that we passed in to each of them.
*/
const salamiPizza = new Pizza(["salami", "cheese", "olives"], "Paulo Azoia");
const tunaPizza = new Pizza(["tuna", "cheese", "sweet corn"], "Helen Azoia");
console.log(salamiPizza);
console.log(tunaPizza);
