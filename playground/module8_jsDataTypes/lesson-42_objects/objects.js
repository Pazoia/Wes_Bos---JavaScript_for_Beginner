console.log("Objects");

const age = 100;
const person = {
    first: "Paulo",
    last: "Azoia",
    age,
    "really cool": true,
    "cool-dude": false,
    clothing: {
        shirts: 10,
        pants: 2,
    },
    sayHello(greeting = "Hey") {
        return `${greeting} ${this.first}`;
    },
};

person.job = "developer to be!!!";
person.age = 55;

console.log(person);
console.log(person.clothing.pants);
console.log(person["cool-dude"]);

const personpants = person.clothing?.pants;
console.log(`I have ${personpants} pants`);

// const propertyToCheck = prompt("What do you want to check?");

// console.log(propertyToCheck);
// console.log(person[propertyToCheck]);
