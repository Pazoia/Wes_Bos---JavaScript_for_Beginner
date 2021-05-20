const age = 250;
const favouriteColor = "Orange";
const first = "Paulo";

export function personDetails(name) {
    return `
        Hi, I'm ${name},
        I am ${age} years old
        and I my favourite color is ${favouriteColor}.
    
    `;
}

/*
    NAMED exports
*/
// these have the names of the elements
// to be exported in between curly brackets.
// As many named exports per module as needed
export { age, favouriteColor };

/*
    DEFAULT exports
*/
export default first;
