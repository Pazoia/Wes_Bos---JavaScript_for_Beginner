console.log("Working with .filter() and .find()");

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

const students = [
    {
        id: "11ce",
        first_name: "Dall",
        last_name: "Puckring",
    },
    {
        id: "2958",
        first_name: "Margarete",
        last_name: "Brandi",
    },
    {
        id: "565a",
        first_name: "Bendicty",
        last_name: "Woodage",
    },
    {
        id: "3a16",
        first_name: "Micki",
        last_name: "Mattes",
    },
    {
        id: "f396",
        first_name: "Flory",
        last_name: "Gladeche",
    },
    {
        id: "de5f",
        first_name: "Jamill",
        last_name: "Emilien",
    },
    {
        id: "54cb",
        first_name: "Brett",
        last_name: "Aizikowitz",
    },
    {
        id: "9135",
        first_name: "Lorry",
        last_name: "Smallman",
    },
    {
        id: "978f",
        first_name: "Gilly",
        last_name: "Flott",
    },
];

const people = [
    {
        birthday: "April 22, 1993",
        names: {
            first: "Keith",
            last: "Buckley",
        },
    },
    {
        birthday: "January 3, 1975",
        names: {
            first: "Larry",
            last: "Heep",
        },
    },
    {
        birthday: "February 12, 1944",
        names: {
            first: "Linda",
            last: "Bermeer",
        },
    },
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

const faces = ["😃", "🤠", "🤡", "🤑", "😵", "🌞", "🐶", "😺"];

const inventory = [
    { type: "shirt", price: 4000 },
    { type: "pants", price: 4532 },
    { type: "socks", price: 234 },
    { type: "shirt", price: 2343 },
    { type: "pants", price: 2343 },
    { type: "socks", price: 542 },
    { type: "pants", price: 123 },
];

const cleanPeople = people.map(function(person) {
    // get their birthday
    // Timestamp
    const birthday = new Date(person.birthday);
    // now Timestamp
    const now = Date.now();
    // figure out how old they are
    const age = Math.floor((now - birthday) / 31536000000);
    // return their full name and bday in an object
    return {
        age,
        name: `${person.names.first} ${person.names.last}`,
    }
});

console.table(cleanPeople);

// Implicit return:
const over40 = cleanPeople.filter((person) => person.age > 40);
console.table(over40);

const over50 = cleanPeople.find((person) => person.age > 50);
console.log(`${over50.name} is ${over50.age} years old.`);

/*
    Higher order function
*/
function finById(id) {
    return function isStudent(student) {
        return student.id === id;
    }
}

const student = students.find(finById("565a"));
console.log(`This is student: 
        ${student.first_name} ${student.last_name}, 
        student id: ${student.id}`);
        
        
function findByProp(prop, propWeAreLookingFor) {
    return function isStudent(student) {
        return student[prop] === propWeAreLookingFor;
    }
}
        
const student2 = students.find(findByProp("id", "f396"));
console.log(`This is student: 
        ${student2.first_name} ${student2.last_name}, 
        student id: ${student2.id}`);

const student3 = students.find(findByProp("first_name", "Micki"));
console.log(`This is student: 
        ${student3.first_name} ${student3.last_name}, 
        student id: ${student3.id}`);
