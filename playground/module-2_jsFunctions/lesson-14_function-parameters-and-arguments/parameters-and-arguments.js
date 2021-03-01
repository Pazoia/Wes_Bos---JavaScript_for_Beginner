console.log("Parameters and Arguments");

// This is a Function Definition
function calculateBill() {
    // this is the function body
    console.log("running calculate bill");
    const total = 100 * 1.13;
    return total;
}

// This is a Function Call or **Run**
// calculateBill();

// Value of calculateBill stored in myTotal variable
const myTotal = calculateBill();
console.log(`Your total is £${myTotal}`);

// JavaScript will run the Function and return the value.
console.log(`Your total is £${calculateBill()}`);
