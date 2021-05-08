/*
    NAMED import
*/
// these have the names of the elements
// to be imported in between curly brackets.
// to rename an element on import, the syntax is { personDetails as personBuilder }
// prettier-ignore
import 
    first /* DEFAULT import */, 
    { personDetails as personBuilder, age, favouriteColor } /* NAMED import */
from
     "./utils.js";

import { handleButtonClick as showCurrencies } from "./handlers.js";
/*
    DEFAULT imports
*/
// these don't have the curly brackets and they
// can be named diferently from the original element
// in the paulo.js file, the element is called 'person',
// but below it's being imported as paulo.
import paulo from "./paulo.js";

console.log("Working with Modules");

console.log(`
    NAMED IMPORTS
`);

const name = "Paulo";

console.log(personBuilder(name));

console.log({ age, favouriteColor });

console.log(`
    DEFAULT IMPORTS
`);

console.log(paulo);

console.log(first);

/*
On Demand import
*/

console.log(`
    ON DEMAND IMPORTS
`);

const button = document.querySelector("button");

button.addEventListener("click", showCurrencies);
