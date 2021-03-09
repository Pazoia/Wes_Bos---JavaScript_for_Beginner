console.log("Creating HTML");

/*
    Creating a new element using javascript
*/

// Creating elements,
// these are not yet displaying on the Dom
const myParagraph = document.createElement("p");
myParagraph.textContent = "I was created with document.createElement()";
myParagraph.classList.add("special");
console.log(myParagraph);

const myImage = document.createElement("img");
myImage.src = "https://source.unsplash.com/random/150x150";
myImage.alt = "Nice photo";
console.log(myImage);

const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv);

/*
    Adding the elements created above to the Dom
*/

/*
The scenario below will cause the browser to reflow
three times on a row, this can possibly cause problems
and slow down the page loading.

    // This will add myDiv to the body of the html code
    document.body.appendChild(myDiv);
    
    // This will add myParagraph to the newly created myDiv element
    myDiv.appendChild(myParagraph);
    myDiv.appendChild(myImage);
    
*/

/*
A better way to do the above is adding the child elements 
to the myDiv element first and after that append the
filled myDiv element to the body element.
*/

// Adding text to myParagraph
myParagraph.insertAdjacentText("beforeend", " and added with .appendChild()");

// Appending myParagraph and MyImage to myDiv
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

// Appending myDiv to body
document.body.appendChild(myDiv);

// Adding something to myDiv using .insertAdjacentElement();
const heading = document.createElement("h2");
heading.textContent = "I was added to myDiv last!!!";

myDiv.insertAdjacentElement("afterbegin", heading);

/* 
    Exercise: create an un-ordered list with 5 items inside
*/

// Created myList ul element
const myList = document.createElement("ul");
myList.classList.add("list-wrapper");

// Creating all five items
const itemOne = document.createElement("li");
itemOne.classList.add("list-items");
itemOne.textContent = "One";

const itemTwo = document.createElement("li");
itemTwo.classList.add("list-items");
itemTwo.textContent = "Two";

const itemThree = document.createElement("li");
itemThree.classList.add("list-items");
itemThree.textContent = "Three";

const itemFour = document.createElement("li");
itemFour.classList.add("list-items");
itemFour.textContent = "Four";

const itemFive = document.createElement("li");
itemFive.classList.add("list-items");
itemFive.textContent = "Five";

// Appending items one and three with the .appendChild() method
myList.appendChild(itemOne);
myList.appendChild(itemThree);

// Appending myList with items one and three to the body element
// using the .appendChild method
document.body.appendChild(myList);

// Adding item two after item one using the .insertAdjacentElement() method
itemOne.insertAdjacentElement("afterend", itemTwo);

// Adding item five to myList using the .insertAdjacentElement() method
myList.insertAdjacentElement("beforeend", itemFive);

// Adding item four before item five using the .insertAdjacentElement() method
itemFive.insertAdjacentElement("beforebegin", itemFour);
console.log(myList);
