/* eslint-disable prettier/prettier */
console.log("Working with Promises - Error Handling");

function makePizza(pizzaName, toppings = []) {
    // eslint-disable-next-line no-unused-vars
    return new Promise(function (resolve, reject) {
        // Reject if people try adding pineaple
        if (toppings.includes("pineaple")) {
            reject(new Error(`
                Sorry, pineaple is not an option!
                🛑 🍍 🛑
                `));
        }
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

function handleError(err) {
    console.log("Something went wrong!");
    console.log(err);
}

makePizza("pineaple", ["tuna", "pineaple"])
    .then((pizza) => {
        console.log(pizza);
    })
    .catch(handleError)
;

/*
    Using Promise.allSettled() to catch the errors
    but still deliver the ones that are good
*/
const p1 = makePizza("pepperoni", ["pepperoni"]);
const p2 = makePizza("pineaple", ["pineaple"]);

const allPizzasPromise2 = Promise.allSettled([p1, p2]);

allPizzasPromise2.then(results => {
    console.log(results);
});

const pepperoniPizzaPromise = makePizza("pepperoni", ["pepperoni", "olives"]);
const bbqChickenPizzaPromise = makePizza("bbq chicken", ["bbq sauce", "chicken", "chorizo"]);
const seaFoodPizzaPromise = makePizza("sea food", ["tuna", "king prawns", "onion", "olives"]);

/*
    Returning the first resolved pizzas with Promise.race()
*/
const firstPizzaPromise = Promise.race([pepperoniPizzaPromise, bbqChickenPizzaPromise, seaFoodPizzaPromise]);

firstPizzaPromise.then((pizza) => {
    console.log("Returning the first pizza ready");
    console.log(pizza);
    console.log("First pizza delivered");
});

/*
    Returning resolved pizzas Concurrently with Promise.all()
*/
const allPizzasPromise = Promise.all([pepperoniPizzaPromise, bbqChickenPizzaPromise, seaFoodPizzaPromise]);

allPizzasPromise.then(function (pizzas) {
    console.log("Returning resolved pizzas Concurrently");
    pizzas.forEach((pizza) => {
        console.log(pizza);
    });
    console.log("Resolved pizzas Concurrently all delivered");
});

/*
    Returning resolved pizzas sequentially
*/
// Returning a pepperoni pizza promise
makePizza("pepperoni", ["pepperoni", "olives"])
    // returning the pepperoni pizza when it's ready
    .then(function (pizza) {
        console.log(pizza);
        // Returning bbq chicken pizza promise
        return makePizza("bbq chicken", ["bbq sauce", "chicken", "chorizo"]);
    })
    // Returning the bbq chicken pizza when it's ready
    .then(function (pizza) {
        console.log(pizza);
        // Returning sea food pizza promise
        return makePizza("sea food", ["tuna", "king prawns", "onion", "olives"]);
    })
    // Returning the sea food pizza when it's ready
    .then(function (pizza) {
        console.log(pizza);
        // Returning an empty pizza promise
        return makePizza("margarita");
    })
    // Returning the empty pizza when it's ready
    .then(function (pizza) {
        console.log(pizza);
        console.log("All Done! That was your last pizza.");
    });
