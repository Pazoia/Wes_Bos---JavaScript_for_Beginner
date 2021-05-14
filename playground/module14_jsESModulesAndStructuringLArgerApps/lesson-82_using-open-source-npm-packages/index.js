import delay from "waait";
import { name } from "faker";
import { formatDistance, format } from "date-fns";

const person = document.querySelector(".person");
const button = document.querySelector(".person-creator");
const christmas = formatDistance(new Date(2021, 12, 25), new Date(), { addSuffix: true });
console.log(christmas);

const today = new Date();
const date = format(today, "'the' do 'of' LLLL y");

async function createPerson() {
    person.textContent = `
        Hello, my name is
        ${name.firstName()} ${name.lastName()},
        today is ${date}
        `;
}

// creating an array of fake names
// eslint-disable-next-line prettier/prettier
const fakeNames = Array.from(
    { length: 10 },
    () => `${name.firstName()} ${name.lastName()}`
);
console.log(fakeNames);

async function go() {
    console.log("Going");
    await delay(500);
    console.log("Ending");
}

button.addEventListener("click", createPerson);

go();
