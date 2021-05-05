/* eslint-disable */
console.log("Promises - Async Await");

function wait(ms = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function go() {
    console.log("Starting");
    await wait(2000);
    console.log("Running");
    await wait(2000);
    console.log("Ending");
}

go();

function makePizza(pizzaName, toppings = []) {
    // eslint-disable-next-line no-unused-vars
    return new Promise(function (resolve, reject) {
        // Wait for the pizza to cook depending on the number of toppings:
        // prettier-ignore
        const amountOfTimeToBake = 500 + (toppings.length * 200);
        setTimeout(function () {
            // When you are ready, you can resolve this promise
            resolve(`
                Here is your ${pizzaName} 🍕,
                with the toppings of:
                ${toppings.length === 0 ? "No toppings added" : toppings.join(", ")}
                
                Enjoy your pizza!
            `);
        }, amountOfTimeToBake);
        // If something went wrong, we can reject this promise
    });
}

async function makeDinner() {
    const seaFoodPizzaPromise = makePizza("sea food", ["prawns", "tuna", "anchoves"]);
    const pepperoniPizzaPromise = makePizza("pepperoni", ["pepperoni"]);
    const margaritaPizzaPromise = makePizza("margarita");

    const pizzas = await Promise.all([seaFoodPizzaPromise, pepperoniPizzaPromise, margaritaPizzaPromise]);

    pizzas.forEach(pizza => {
        console.log(pizza);
    });
}

makeDinner();

/*
    async - await works on any kind of function
    as shown below
*/

// Function declaration
    // async function fd() {
    //     await wait(2000);
    // }

// Arrow function
    // const arrowFn = async () => {}

// Call back function
    // window.addEventListener("click", async function () {
    //     await wait(2000);
    // });

// const person = {
//     // method
//     sayHi: function () {

//     },
//     // method shorthand
//     async sayHello() {

//     },
//     // function property
//     sayHey: async () => {

//     }
// }