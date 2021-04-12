console.log("Working with Arrays - Instance Methods");

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
    Instance Methods
*/
console.group("Instance Methods");
// Display all bun types with " or " - use join()
console.groupCollapsed(".join()");
console.log(buns.join(" or "));
console.groupEnd(".join()");

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into an array
console.groupCollapsed(".split()");
const foodString = "hot dogs,hamburgers,sausages,corn";
console.log(foodString.split(","));
console.groupEnd(".split()");

// take the last item off toppings with pop()
console.groupCollapsed(".pop()");
const lastItem = toppings.pop();
console.log(`lastItem: ${lastItem}`);
console.groupEnd(".pop()");

// add it back with push()
console.groupCollapsed(".push()");
toppings.push(lastItem);
console.log(toppings);
console.groupEnd(".push()");

// take the first item off toppings with shift()
console.groupCollapsed(".shift()");
const firstItem = toppings.shift();
console.log(`firstItem: ${firstItem}`);
console.log(toppings);
console.groupEnd(".shift()");

// add it back in with unshift()
console.groupCollapsed(".unshift()");
toppings.unshift(firstItem);
console.log(toppings);
console.groupEnd(".unshift()");

// Do the last four,but immutable (with spreads and new variables)
console.groupCollapsed(".pop, .push, .shift, .unshift using the spread operator (...)");
console.log(".pop() Immutable, not changing the original array");
let newToppings = toppings.slice(0, toppings.length - 1);
console.log(newToppings);

console.log(".push() Immutable, not changing the original array");
newToppings = [...newToppings, toppings[toppings.length - 1]];
console.log(newToppings);

console.log(".shift() Immutable, not changing the original array");
let newToppings1 = toppings.slice(1);
console.log(newToppings1);

console.log(".unshift() Immutable, not changing the original array");
newToppings1 = [toppings[0], ...newToppings1];
console.log(newToppings1);
console.groupEnd(".pop, .push, .shift, .unshift using the spread operator (...)");

// Make a copy of the toppings array with slice()
console.groupCollapsed(".slice()");
const toppingsCopy1 = toppings.slice();
console.log(toppingsCopy1);
console.groupEnd(".slice()");

// Make a copy of the toppings array with a spread
console.groupCollapsed("Making a copy of an array using the spread operator (...)");
const toppingsCopy2 = [...toppings];
console.log(toppingsCopy2);
console.groupEnd("Making a copy of an array using the spread operator (...)");

// take out items 3 to 5 of your new toppings array with splice()
console.groupCollapsed(".splice()");
const toppingsRemoved = toppingsCopy1.splice(3, 3);
console.log(toppingsCopy1);
console.groupEnd(".splice()");

// find the index of Avocado with indexOf() / lastIndexOf()
console.groupCollapsed(".indexOf()");
const avoIndex = toppings.indexOf("Avocado");
console.log(avoIndex);
console.groupEnd(".indexOf()");

// Check if hot sauce is in the toppings with includes()
console.groupCollapsed(".includes()");
function isInToppings(topping) {
    return toppings.includes(topping);
}
console.log("hot sauce in toppings:");
console.log(isInToppings("hot sauce"));
console.log("Bacon in toppings:");
console.log(isInToppings("Bacon"));
// add it if it's not
if (!isInToppings("hot sauce")) {
    toppings.push("hot sauce");
};
console.log(toppings);
console.groupEnd(".includes()");
// flip those toppings around with reverse()
console.groupCollapsed(".reverse()");
const reversedArray = [...toppings].reverse();
console.log(reversedArray);
console.groupEnd(".reverse()");
console.groupEnd("Instance Methods");

