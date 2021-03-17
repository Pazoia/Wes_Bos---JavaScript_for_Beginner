console.log("Event Listener");

/*
    Event Listener 3 stages
*/

// Stage 1: Go get something
const buttonButts = document.querySelector(".butts");
const buttonCool = document.querySelector(".cool");

// Stage 3: Do something
function sayHi() {
    const hi = document.createElement("h2");
    hi.textContent = "🐞 Hi there!!!";
    document.body.appendChild(hi);
    console.log("Hi there!!!");
}

const hooray = () => {
    const celebrate = document.createElement("h2");
    celebrate.textContent = "🍻 😎 HOORAY";
    document.body.appendChild(celebrate);
    console.log("HOORAY");
};

// Stage 2: Listen for something
buttonButts.addEventListener("click", sayHi);
buttonCool.addEventListener("click", sayHi);
// The above statements are binding the sayHi function to the buttons variables

buttonButts.removeEventListener("click", sayHi);
// The statement above is unbinding the sayHi function from the buttonButts variable

buttonButts.addEventListener("click", hooray);
// The statement above is binding the hooray anonymous function to the buttonButts variable

/*
    Listening on multiple buttons
*/

// Stage 1: Getting all the buy buttons on the page
const buyButtons = document.querySelectorAll("button.buy");

// Stage 3: Console logging "BUYING ITEM" for a click
//          on any of the buttons
function buyItem() {
    console.log("BUYING ITEM");
}

// Stage 2: Looping through all the buttons and listening
//          for a click on all of them
buyButtons.forEach((button) => {
    button.addEventListener("click", buyItem);
});
