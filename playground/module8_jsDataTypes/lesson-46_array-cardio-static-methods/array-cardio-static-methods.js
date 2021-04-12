console.log("Working with arrays - Static Methods");
/* eslint-disable */
const toppings = [
    "Mushrooms ",
    "Tomatoes",
    "Eggs",
    "Chili",
    "Lettuce",
    "Avocado",
    "Chiles",
    "Bacon",
    "Pickles",
    "Onions",
    "Cheese",
];

const buns = ["egg", "wonder", "brioche"];

const meats = {
    beyond: 10,
    beef: 5,
    pork: 7,
};

const prices = {
    hotDog: 453,
    burger: 765,
    sausage: 634,
    corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
    { comment: "Love the burgs", rating: 4 },
    { comment: "Horrible Service", rating: 2 },
    { comment: "Smoothies are great, liked the burger too", rating: 5 },
    { comment: "Ambiance needs work", rating: 3 },
    { comment: "I DONT LIKE BURGERS", rating: 1 },
];

/*
    Static Methods
*/

// Array.of();
console.group("Static Methods");
console.groupCollapsed("Array.of()");
console.log("With Array.of() a new array is created with the data in the parentesis");
console.log(Array.of("Paulo", "Helen"));
console.log(Array.of(..."Paulo"));
console.groupEnd("Array.of()");

// Make a function that creates a range from x to y with Array.from();
console.groupCollapsed("Array.from");
console.log("Array.from({ length: 10 }) creates an array with a given length");
function createRange(start, end) {
    /* eslint-disable-next-line */
    const range = Array.from({ length: end - start + 1 },
        function (item, index) {
        return index + start;
    });
    return range;
}
console.log(createRange(3, 7));
console.groupEnd("Array.from");

// Check if the last array you created is really an array with Array.isArray();
console.groupCollapsed("Array.isArray()");
console.log("Array.isArray() checks if an array is a true array");
const myRange = createRange(3, 7);
console.log(`typeof myRange array: ${typeof myRange}`);
console.log(`Array.isArray(myRange): ${Array.isArray(myRange)}`);
console.groupEnd("Array.isArray()");

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
console.groupCollapsed("Object.entries(), Object.keys(), Object.values()");
console.log("Object.entries():");
console.log(Object.entries(meats));
console.log("Object.keys():");
console.log(Object.keys(meats));
console.log("Object.values():");
console.log(Object.values(meats));

const ul = document.querySelector(".meats");
Object.entries(meats).forEach((entry) => {
    const [meat, qty] = entry;
    console.log(meat, qty);
    const li = `<li>${meat} ${qty}</li>`;
    ul.insertAdjacentHTML("beforeend", li);
});
console.groupEnd("Object.entries(), Object.keys(), Object.values()");

console.groupEnd("Static Methods");
