console.log("Object reference vs value");

/*
    Working with variables
*/

let name1 = "Paulo";
const name2 = "Paulo";
console.log(name1 === name2);

name1 = "Scott";
console.log(name1 === name2);

// update name1 to be what is name2
name1 = name2;
console.log(name1 === name2);

/*
    Working with objects
*/

const person1 = {
    first: "Paulo",
    last: "Azoia",
    clothing: {
        shirts: 10,
        pants: 2,
    },
};

const person2 = {
    first: "Paulo",
    last: "Azoia",
};

console.log(person1 === person2);
/*
    This returns false because whe working with objects
    the object itself is being compared, not its content.
    Therefor person1 and person2 are diferent objects that happens
    to have the same content.
*/

/*
    This is referencing a variable to an object
    below we created a variable (person3) that points
    to the object in person1.
*/
const person3 = person1;
console.log("person1:");
console.log(person1);
console.log("person3:");
console.log(person3);

/*
    This is a fundamental concept in JavaScript
    when you change the variable pointing to the
    object, it'll change the origin (person1 in this case)
    this leads to potential bugs

    
person3.first = "Helen";
console.log("person3.first:");
console.log(person3.first);
console.log("person1.first:");
console.log(person1.first);

    This concept also applies to using objects in functions as reference
    as shown below

function doStuff(data) {
    data.first = "Helen";
}

doStuff(person3);
*/

// Creating a copy of the object using the spread operator ( ... )
const person4 = { ...person1 };
console.log("person4:");
console.log(person4);

person4.first = "Helen";
console.log("person4.first:");
console.log(person4.first);
console.log("person1.first:");
console.log(person1.first);

/*
    The spread operator makes a shalow copy of an object
    meaning that if there's an object within an object
    this will be referenced to the original object, and it'll
    any change made to the copy object on the inner object will be
    reflected on the original object also

person4.clothing.shirts = 100;
console.log("person4:");
console.log(person4);
console.log("person1:");
console.log(person1);
*/

/*
    To make a deep copy of an object ( Copying the objects within the copied object)
    use lodash as exemplefied below.
*/
// eslint-disable-next-line
const person5 = _.cloneDeep(person1);
person5.clothing.shirts = 50;
person5.first = "Sonia";
console.log("person5:");
console.log(person5);
console.log("person1:");
console.log(person1);

/*
    The spread operator can also be used to merge various objects into one
*/

const meatInventory = {
    bacon: 2,
    sausage: 3,
    steack: 5,
};

const fishInventory = {
    salmon: 7,
    trout: 4,
    cod: 10,
};

const veganInventory = {
    mushrooms: 15,
    veganChicken: 10,
    peas: 5,
};

const allFoodInventory = { ...meatInventory, ...fishInventory, ...veganInventory };
console.log(allFoodInventory);
