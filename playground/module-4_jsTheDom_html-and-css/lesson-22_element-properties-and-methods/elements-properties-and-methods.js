console.log("Elements properties and methods");

const heading = document.querySelector("h2");

console.log(heading);

// console.dir() will output all properties attached to an element to the console
console.dir(heading);

// The below is a getter as it gets the textContent property of the element
console.log(heading.textContent);

// The below is a setter as it sets the textContent property of the element
heading.textContent = "Paulo is cool";
// .textContent will show everything inside the element,
// including for example code you might use for styling your text.
console.log(heading.textContent);

// .innerText will only return the human readable text
// all other text inside the element will be hidden
console.log(heading.innerText);

console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector(".pizza");
console.log(pizzaList.textContent);

/*
    Below is a way to add text to the element by changing the
    element with the .textContent property.
    The one drawback of this is that it has to render the whole
    element every time there's a change which will slow down the website.
*/
pizzaList.textContent = `${pizzaList.textContent} 🍕`;

/* 
    .insertAdjacentText(position, element);
    Above is a method to add text to an element without having to render the whole element
*/
// This will add a pizza slice at the end of the text
pizzaList.insertAdjacentText("beforeend", " 🍕");

// This will add a pizza slice at the beginning of the text
pizzaList.insertAdjacentText("afterbegin", " 🍕");
