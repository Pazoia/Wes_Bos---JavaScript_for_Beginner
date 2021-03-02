console.log("Debugging Tools");

const people = [
    { name: "Wes", cool: true, country: "Canada" },
    { name: "Scott", cool: true, country: "Merica" },
    { name: "Snickers", cool: false, country: "Dog Country" },
];

// Console Methods
/*
    console.info("I'm just an informative log");
    console.error("I'm displaying a message as an error into the console");
    console.warn("I'm displaying a message as an warning into the console");
    console.table(people);

    function add(a, b = 3) {
        console.count("Running add");
        return a + b;
    }

    function consoleGrouping() {
        people.forEach((person, index) => {
            console.groupCollapsed(`${person.name}`);
            console.log(person.country);
            console.log(person.cool);
            console.log("Done!!!");
            console.groupEnd(`${person.name}`);
        });
    }
*/

// Callstack, Stack trace
/*
    function doctorize(name) {
        return `Dr. ${name}`;
    }

    function greet(name) {
        // doesntExist(); // this was causing the error!
        return `Hello ${name}`;
    }

    function go() {
        const name = greet(doctorize("Wes"));
        console.log(name);
    }
*/

// Grabbing Elements
/*
    These are to be used in the console only:
    $('p') - This will bring the first occurrence of the selector ('p') in the page
    $$('p') - This will bring all the occurrences of the selector ('p') in the page
*/

// Breakpoints
/*
    people.forEach((person, index) => {
        // debugger; // This will stop the code from running in the Devtools in the console.
        console.log(person.name);
    });
*/

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

const button = document.querySelector(".bigger");
button.addEventListener("click", function (e) {
    const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
    e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
    const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "text/plain",
        },
    });
    const joke = await res.text();
    console.log(joke);
    return joke;
}
