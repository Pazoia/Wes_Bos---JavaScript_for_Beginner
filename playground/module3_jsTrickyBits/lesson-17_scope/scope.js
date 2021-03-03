console.log("Scope");

/* eslint-disable */
// Declaring a global variable, this will be accessible from anywhere
// Global variables are not the best practise and should be avoided.
/*
    const first = "Paulo";
    let second = "Azoia";
    var age = 100;
*/

// Declaring a global function, this will be accessible from anywhere
// Global functions are not the best practise and should be avoided.
/*
    function sayHi(name) {
        console.log(`Hi ${name}`);
    }
*/

const age = 100;

function go() {
    const hair = "blonde";
    // Both two statements below will work as functions will look for the variable first inside the function
    // if the variable is not declared inside the function it'll scope outside of the function searching for it
    
    // Scoped outside to get the variable
    console.log(age);
    // Found variable inside function
    console.log(hair);
}

go();

// As the age variable is a global variable, it is accessible
/*
    console.log(age);
*/

// The hair variable is within the scope of the go function
// therefore not available globally.
/*
    console.log(hair);
*/

// Below is an example of block scoping, where the variables inside the function
// won't leak to outside the function
function isCool(name) {
    let cool;
    if (name === "Paulo") {
        cool = true;
    }
    console.log(cool);
    return cool;
}

// i will be available in the console as we used the var keyword
/*
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
*/

// i will not be available in the console as we used the let keyword
// the i variable is now only accessible within the code block inside {}
/*
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
*/

