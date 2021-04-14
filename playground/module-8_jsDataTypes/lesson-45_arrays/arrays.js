console.log("Working with Arrays");

// Array literal syntax
const names = ["Paulo", "Helen", "Pumpkin"];
console.log(Array.isArray(names));
console.log(names);

// Logging an item by its index
console.log(names[1]);

// Checking how many items the array contains
console.log(names.length);

// Accessing the last item of the array
console.log(names[names.length - 1]);

/*
    Adding items to an array
*/
// .push() adds items to the end of the array
names.push("Ruth");
console.log(names);
// .unshift() adds items to the front of the array
names.unshift("Paul");
console.log(names);
// There are no built-in methods to add items to the middle of an array
// so we create a new array addind the item in the process
const bikes = ["bianchi", "miele", "panasonic", "miyata"];
console.log(bikes);
const newBikes = [...bikes.slice(0, 2), "benotto", ...bikes.slice(2)];
console.log(newBikes);

// Removing panasonic
const newBikes2 = [...newBikes.slice(0, 3), ...newBikes.slice(4)];
console.log(newBikes2);

const comments = [
    { text: "Cool Beans", id: 123 },
    { text: "Love this", id: 124 },
    { text: "Neato", id: 125 },
    { text: "Good bikes", id: 126 },
    { text: "Learning a lot", id: 127 },
    { text: "JavaScript", id: 128 },
];

function deleteComment(id, commentsData) {
    // first find the index of the item in the array
    const commentIndex = commentsData.findIndex((comment) => comment.id === id);
    // make a new array without that item in it
    return [...commentsData.slice(0, commentIndex), ...commentsData.slice(commentIndex + 1)];
    // return our new array
}
console.log(comments);
const removedComments = deleteComment(125, comments);
console.log(removedComments);

/*
    .slice() - This WILL NOT change the original array
               It creates a new array with the selected items
               With slice the parameters are where to start and where to end selection
*/

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers2);
const removedFromNumbers2 = numbers2.slice(2, 5);
console.log(numbers2);
console.log(removedFromNumbers2);

/*
    .splice() - This WILL change the original array
                It'll remove the selected items from the original array
                With splice the parameters are where to start and how many items to remove
*/

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers1);
numbers1.splice(3, 2);
console.log(numbers1);

/*
    Mutation Methods - THESE CHANGE THE ORIGINAL DATA
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.reverse();
console.log(numbers);

/*
    Immutable Methods - THESE DO NOT CHANGE THE ORIGINAL DATA
*/
const pizzaSlice = numbers.slice(2, 5);
console.log("Removed from the numbers array:");
console.log(pizzaSlice);
console.log("Numbers array stays un-changed:");
console.log(numbers);

// Anytime you want to use a mutation method and NOT mutate the original array
// We need to take a copy of the array
const numbersReversed = [...numbers].reverse();
console.log("This is a copy of the numbers array, after being reversed:");
console.log(numbersReversed);
console.log("Numbers array stay un-changed:");
console.log(numbers);
