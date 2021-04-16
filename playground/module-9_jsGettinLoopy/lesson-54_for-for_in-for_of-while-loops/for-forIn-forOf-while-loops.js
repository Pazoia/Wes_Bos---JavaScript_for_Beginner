/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

console.log("Working with for ; for of ; for in ; while loops");

const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

const myName = "Paulo Azoia";

// For
console.groupCollapsed("For loop");

for (let i = 0; i < 10; i++) {
    console.log(myName);
    console.log(`I printed ${i + 1} times`);
}

// eslint-disable-next-line no-plusplus
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.groupEnd("For loop");
// For of
console.groupCollapsed("For of loop");
for (const letter of myName) {
    console.log(letter);
}
console.groupEnd("For of loop");

// For in
console.groupCollapsed("For in loop");

for (const number in numbers) {
    console.log(number);
}
console.groupEnd("For in loop");

// While
console.groupCollapsed("While loop");

let cool = true;
let j = 1;

while (cool === true) {
    console.log("You are cool");
    j++;
    if (j > 100) {
        cool = false;
    }
}
console.groupEnd("While loop");
