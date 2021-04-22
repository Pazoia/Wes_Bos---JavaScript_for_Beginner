console.log("The 'new' keyword");

const myDate = new Date("August 11, 2025");
console.dir(myDate);
console.log(myDate.getFullYear());

// Literal syntax does not require the keyword new
const names = ["Paulo", "Helen"];
console.log(names);

const names1 = new Array(...names);
console.log(names1);

function Pizza() {
    console.log("Making a pizza");
}

/*
    When the 'new' keyword is used on a function it creates
    a new instance object of that function
*/

const pepperoniPizza = new Pizza();
console.log(pepperoniPizza);
console.log(pepperoniPizza.constructor);
console.log(`pepperoniPizza instanceof Pizza: ${pepperoniPizza instanceof Pizza}`);

// behind the scenes JavaScript is making a 'new' element called span
// whithout having to explicity instruct it with the 'new' keyword
const span = document.createElement("span");
console.log(span.constructor);
