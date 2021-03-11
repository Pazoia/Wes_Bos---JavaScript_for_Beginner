console.log("Targets, Bubbling, Propagation, Capture");

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

function handleBuyButtonClick(e) {
    // .target will return the element that got clicked
    // if you have an element nested in a button it'll
    // return the nested element
    const button = e.target;
    console.log(button);

    // .currentTarget will return the event
    // that fired the event listener
    const button1 = e.currentTarget;
    console.log(button1);
    console.log(button1.textContent);
    console.log(parseFloat(e.target.dataset.price));
    // Stop this event from bubbling up
    e.stopPropagation();
}

buyButtons.forEach((button) => {
    button.addEventListener("click", handleBuyButtonClick);
});

window.addEventListener(
    "click",
    () => {
        console.log("YOU CLICKED THE WINDOW!!!");
    }
    // { capture: true }
);

/*
    Bubbling up starts from the selected element and
    it runs through the elements bottom to top
    In our case it would be:
    * strong
    * button
    * body
    * HTML
    * Document
    
    Using the .stopPropagation() method the function will only
    reach the selected elements and won't move up to elements above it.
*/

/*
    Capture starts from the top and it runs through the elements top to bottom
    In our case it would be:
    * Document
    * HTML
    * body
    * button
    * strong
    
    This is rarely used but good to know in case it comes up on an interview
*/

const photoEl = document.querySelector(".photo");

photoEl.addEventListener("mouseenter", function (e) {
    console.log(e.currentTarget);
    console.log(this);
});
