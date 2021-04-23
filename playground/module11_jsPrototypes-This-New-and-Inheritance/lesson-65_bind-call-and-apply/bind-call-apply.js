/* eslint-disable */
console.log("Bind - Call - Apply");

/*
    .bind(), .call() and .apply()
    will change the scope of the 'this' keyword
    is equal to inside of a function
    or inside of a method.
*/

const person = {
    name: "Paulo Azoia",
    sayHi() {
        return `Hey ${this.name}`;
    },
};

const helen = { name: "Helen Azoia" }
const ruth = { name: "Ruth" }

const sayHiToHelen = person.sayHi.bind(helen);
const sayHiToRuth = person.sayHi.bind(ruth);

const bill = {
    total: 1000,
    calculate: function (taxRate) {
        return this.total + (this.total * taxRate);
    },
    describe: function (mealType, drinkType, taxRate) {
        console.log(`
            Your meal of ${mealType} with a drink of ${drinkType}
            was ${this.calculate(taxRate)}
        `);
    }
}


const total = bill.calculate(0.13);
console.log(`The total with tax is: ${total}`);

// .bind() returns a function that needs to be called after being created
const calcWithBind = bill.calculate.bind({ total: 500 }, 0.13);
console.log(`Your total came from the calcWithBind function: ${calcWithBind()}`);

// .call() works like .bind() but it calls the function automatically
const calcWithCall = bill.calculate.call({ total: 750 }, 0.06);
console.log(`Your total came from the calcWithCall function: ${calcWithCall}`);

const myMeal = bill.describe.call(bill, "pizza", "beer", 0.13);
console.log(myMeal);

// .apply() works like .call() but it takes the second argument as an array of items
const calcWithApply = bill.calculate.apply({ total: 250 }, [0.10]);
console.log(`Your total came from the calcWithApply function: ${calcWithApply}`);

const myMeal2 = bill.describe.apply(bill, ["pizza", "beer", 0.13]);
console.log(myMeal2);
