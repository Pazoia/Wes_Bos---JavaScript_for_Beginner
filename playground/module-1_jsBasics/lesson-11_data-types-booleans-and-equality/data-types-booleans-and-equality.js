/* eslint-disable */

console.log('data types Booleans and Equality');

// a boolean will always return a true or false value

    // an example on how to use the boolean returned value
    let isDrawing = false;
    console.log(isDrawing);

    if (isDrawing === false) {
        isDrawing = true;
    }
    console.log(isDrawing);

    // another example of how to use a boolean
    const age = 18;
    const ofAge = age > 19;

    if (ofAge) {
        console.log(`You are ${age} years, you can buy the beer!!!`);
    } else {
        console.log(`You're only ${age} years old, no beer for you!!! `)
    }

// equality:

    /* 
    the single = sign is used to assign a variable, 
    also used to reassign a new value to a variable 
    */
    let first = "Paulo";
    console.log(`His name is ${first}`);
    first = "Pazoia";
    console.log(`His name changed to ${first}`);

    /*
    Using the == and === signs:
   */
    
   /*
    As a rule of thumb always use === sign to compare two values,
    there will be exceptions were you have to use == but these are very rare.
    */
   
    /*
    The difference between the two:
    the == sign compares two values, 
    but it only looks at the value it's comparing
    leading to false trues, example below:
    */
   const doubleEquals = "10" == 10;
   // This returns true but a string will never be equal to an integer.
   console.log(doubleEquals);
   
   /*
   the === sign also compares two values, 
   but it looks at both the value and the type it's comparing
   resulting in more accurate returns, example below:
   */
   const trippleEquals = "10" === 10;
   // This returns false because a string will never be equal to an integer.
   const trippleEquals1 = 10 === 10;
   console.log(`"10" === 10 is ${trippleEquals}`);
   console.log(`10 === 10 is ${trippleEquals1}`);
 