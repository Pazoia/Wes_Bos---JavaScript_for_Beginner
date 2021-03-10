console.log("DOM Cardio");
// Make a div
const myDiv = document.createElement("div");

// add a class of wrapper to it
myDiv.classList.add("wrapper");

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = document.createElement("ul");

// add three list items with the words "one, two, three" in them
const items = `
    <li>one</li>
    <li>two</li>
    <li>three</li>
`;

const myFragmentitems = document.createRange().createContextualFragment(items);
myList.appendChild(myFragmentitems);

// put that list into the above wrapper
myDiv.appendChild(myList);

// create an image
const myImage = document.createElement("img");

// set the source to an image
myImage.src = "https://source.unsplash.com/random";

// add an alt of Cute Puppy
myImage.alt = "Cute Puppy";

// set the width to 250
myImage.width = 250;
myImage.height = 250;

// add a class of cute
myImage.classList.add("cute");

// Append that image to the wrapper
myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="myDiv">
        <p>I am paragraph 1</p>
        <p>I am paragraph 2</p>
    </div>
`;

// put this div before the unordered list from above
const ulElement = myDiv.querySelector("ul");
ulElement.insertAdjacentHTML("beforebegin", myHTML);

// add a class to the second paragraph called warning
const div = myDiv.querySelector(".myDiv");
div.children[1].classList.add("warning");

// remove the first paragraph
div.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
// <h2>NAME — AGE</h2>
// <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
    const html = `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>This person is ${height / 100}m tall and is ${age} years old. <br>
            In Dog years this person would be ${age * 7}. <br>
            That would be a tall dog!</p>
            <button class="delete-card" type="button">Delete Card</button>
        </div>
    `;
    return html;
}

// make a new div with a class of cards
const cards = document.createElement("div");
cards.classList.add("cards");
console.log(cards);

// make 4 player cards using generatePlayerCard
const card1 = generatePlayerCard("Paulo", 60, 250);
const card2 = generatePlayerCard("Helen", 45, 180);
const card3 = generatePlayerCard("Paul", 50, 200);
const card4 = generatePlayerCard("Ruth", 46, 190);

// append those cards to the div
cards.insertAdjacentHTML("afterbegin", card4);
cards.insertAdjacentHTML("afterbegin", card3);
cards.insertAdjacentHTML("afterbegin", card2);
cards.insertAdjacentHTML("afterbegin", card1);

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement("beforebegin", cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
const buttons = document.querySelectorAll(".delete-card");

function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    // buttonThatGotClicked.parentElement.remove();
    /* 
        .closest will look up the tree of DOM elements until
        it finds the closest match provided
    */
    buttonThatGotClicked.closest(".playerCard").remove();
}

buttons.forEach((button) => button.addEventListener("click", deleteCard));
