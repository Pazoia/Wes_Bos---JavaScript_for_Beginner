console.log("Closures");

// Closure by creting a function
function outer() {
    const outerVar = "Hey I am the outer Var";
    function inner() {
        const innerVar = "Hey I am the inner Var";
        console.log(innerVar);
        console.log(outerVar);
    }
    return inner;
}

const innerFn = outer();
innerFn();

// Another Closure by creting a function
function createGreeting(greeting = "") {
    const myGreet = greeting.toUpperCase();
    return function (name) {
        return `${myGreet} ${name}`;
    };
}

const sayHello = createGreeting("Hello");
const sayHey = createGreeting("Hey");

console.log(sayHello("Paulo"));
console.log(sayHello("Helen"));
console.log(sayHey("Paulo and Helen"));

// Closure by creating a private variable
function createGame(gameName) {
    let score = 0;
    return function win() {
        score++;
        return `Your game ${gameName} score is ${score}`;
    };
}

const hockeyGame = createGame("Hockey");
const footballGame = createGame("Football");

/*
    Closures are the ability for a child or inner function to
    access variables from a higher level scope even after the
    function have been called or closed.
*/
