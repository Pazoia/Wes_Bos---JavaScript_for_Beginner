console.log("Intervals and Timers");

// Timer with setTimeout()

function buzzer() {
    console.log("buzzzzzz");
}

console.log("Starting");
setTimeout(buzzer, 500);
console.log("Finishing");

// Intervals with setInterval()

// the code below will not start immediatly,
// it'll only run after the first 2 seconds
// setTimeout(buzzer, 200);

function setImmediateInterval(funcToRun, ms) {
    // right away call that function
    funcToRun();
    // run a regular interval
    return setInterval(funcToRun, ms);
}

// setImmediateInterval(buzzer, 2000);

function destroy() {
    document.body.innerHTML = "<p>DESTROYED</p>";
}

// Save reference to the Timeout timer to be able to stop it if neccessary
const bombTimer = setTimeout(destroy, 5000);

window.addEventListener("click", function () {
    console.log("You clicked! You saved the world...");
    clearTimeout(bombTimer); // Stop the timer from running
});

const poopInterval = setInterval(function () {
    console.log("💩");
    console.log("HeHeHe");
}, 1000);

setTimeout(function () {
    clearInterval(poopInterval);
}, 3000);
