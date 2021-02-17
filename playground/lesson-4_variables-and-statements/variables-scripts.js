"use strict";

console.log("variables lesson");

// function scoped
var first = "Paulo"; // variable declaration
// block scoped
let age = 300;
const cool = true;

// rules and opinion on using variables
// use const by default
// change it to let if you find you need to change the value of it

// variables must start with lowercase a to z character
// $ and _ can also be used to start variable names, these are usually created by libraries.

// if the variable has more than one word the most used way to write it is camel case, example below:
const myFirstName = "Paulo";

first = "Pazoia";

let dog;
dog = "snickers";
dog = "blob";

console.log(first); // function call statement
