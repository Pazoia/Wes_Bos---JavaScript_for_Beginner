console.log("Hoisting");

// Function hoisting
/*
    function hoisting means that JavaScript will move all functions
    declared with the function keyword to the top of the file.
    This means you can call the function before it is declared and JavaScript
    will still running with no problems.
    example:
*/

/* eslint-disable */
// Calling the function
sayHi();

// Declaring the function
function sayHi() {
    console.log("Hey!!!");
}
