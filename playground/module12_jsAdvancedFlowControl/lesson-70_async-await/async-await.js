console.log("Promises - Async Await");

function makePizza(pizzaName, toppings = []) {
    return new Promise(function (resolve, reject) {
        // Reject if people try adding pineaple
        if (toppings.includes("pineaple")) {
            reject(
                new Error(`
                Sorry, pineaple is not an option!
                🛑 🍍 🛑
                `)
            );
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
    .catch(handleError);

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
