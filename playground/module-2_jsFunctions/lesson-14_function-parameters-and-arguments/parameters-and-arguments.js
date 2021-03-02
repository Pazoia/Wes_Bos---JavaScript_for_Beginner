console.log("Parameters and Arguments");

// This is a Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    // this is the function body
    console.log("running calculate bill");
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
}

// Passing the values for all Parameters
const myTotal = calculateBill(100, 0.13, 0.15);

// Passing only the billAmount value
// all other values will fall to their default value
const myTotal1 = calculateBill(100);

// Changing the value of the billAmount
const myTotal2 = calculateBill(200);

// Changing billAmount and tipRate,
// but leaving taxRate to fall on it's default value
const myTotal3 = calculateBill(300, undefined, 0.5);
console.log(myTotal, myTotal1, myTotal2, myTotal3);

// This is a Function Call or **Run**
// calculateBill();

// Value of calculateBill stored in myTotal variable
// console.log(`Your total is £${myTotal}`);

// JavaScript will run the Function and return the value.
// console.log(`Your total is £${calculateBill()}`);

function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

const greeting = sayHiTo("Paulo");
console.log(greeting);

function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name = "Silly Goose") {
    return `HEY ${name.toUpperCase()}`;
}

const doctorizedName = yell(doctorize("Paulo"));
console.log(doctorizedName);

const doctorizedName1 = yell();
console.log(doctorizedName1);
