console.log("Ways to Declare Functions");

/* 
    JavaScript functions are First Class Citizens
    Functions can be stored in variables,
    Functions can be used in other functions,
*/

/* 
    Hoisting:
    Hoisting means JavaScript brings all functions
    with the function keyword to the top of the file,
    meaning these will always be available no matter 
    where they are declared inside the file.

    JavaScript doesn't hoist variable functions, meaning
    that if you call a variable function before it is declared 
    it'll throw an error.
*/

// Ways to declare a Function:

// Declaring a function using the function keyword
/*
    function doctorize(firstName) {
        return `Dr. ${firstName}`;
    }
*/

// Declaring a Function Expression
// Rarely to never used
/*
    const doctorize = function (firstName) {
        return `Dr. ${firstName}`;
    };
*/

// Declaring an Anonymous function
// The function below is not valid JavaScript
/*
    function (firstName) {
        return `Dr. ${firstName}`;
    }
*/

// Declaring an arrow function
/*
    const inchToCM = (inches) => inches * 2.54;
    
    const add = (a, b = 3) => a + b;
*/

// Declaring an arrow function that will return an object
/*
    const makeBaby = (first, last) => {
        const baby = {
            name: `${first} ${last}`,
            age: 0,
        };
        return baby;
    };
 */

// IIFE
// Immediately Invoked Function Expression
/*
    (function () {
        console.log("Running the Anon function");
        return "You are cool";
    })();

    // with a parameter
    (function (age) {
        console.log("Running the Anon function");
        return `You are cool and age ${age}`;
    })(10);
 */

/* eslint-disable */
//  Methods!!!
/*
    const paulo = {
        name: "Paulo Azoia",
        // Method:
        sayHi: function () {
            console.log("Hey Paulo");
            return "Hey Paulo";
        },
        // Short hand Method:
        yellHi() {
            console.log("HEY PAULO");
        },
        // Arrow function:
        wisperHi: () => {
            console.log("hii paulo, i'm a mouse");
        }
    };
*/
