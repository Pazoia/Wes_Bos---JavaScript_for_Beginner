console.log("Coercion, Ternaries and Conditional abuse");

// Coercion: is when one value is coerced into a diferent type
const isCool = true;

if (!isCool) {
    console.log("You are not cool");
}

// Ternary
const count = 10;
/*
let word;
if (count === 1) {
    word = "item";
} else {
    word = "items";
}
*/

const word = count === 1 ? "item" : "items";
const sentence = `You have ${count} ${word} in your cart`;
console.log(sentence);
