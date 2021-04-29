console.log("Promises - Async Await Error handling");

function makePizza(pizzaName, toppings = []) {
    // eslint-disable-next-line no-unused-vars
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
        // If something went wrong, we can reject this promise
    });
}

/*
    This is one way of handling errors with: 
    try {
        something
    } catch (err) {
        do something with error
    }
*/
async function go() {
    try {
        const pizza = await makePizza("pineaple", ["pineaple"]);
        console.log(pizza);
    } catch (err) {
        console.log("Something went wrong!");
        console.log(err);
    }
}

go();

/*
    Another way of handling errors
*/
function handleError(err) {
    console.log("Something went wrong!");
    console.log(err);
}

// Catch it at run time
async function go1() {
    const pizza = await makePizza("pineaple", ["pineaple"]);
    console.log(pizza);
    const pizza2 = await makePizza("ham", ["ham"]);
    console.log(pizza2);
}

go1().catch(handleError);

// make a safe function with a High Order Function
async function go2() {
    const pizza = await makePizza("pineaple", ["pineaple"]);
    console.log(pizza);
    const pizza2 = await makePizza("ham", ["ham"]);
    console.log(pizza2);
}

function makeSafe(fn, errorHandler) {
    return function () {
        fn().catch(errorHandler);
    };
}

const safeGo = makeSafe(go2, handleError);
safeGo();
