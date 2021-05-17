import delay from "waait";
import to from "await-to-js";
import { name } from "faker";
import { formatDistance, format } from "date-fns";
import { intersection, isEqual } from "lodash";

/*
    Working with date-fns
*/

const christmas = formatDistance(new Date(2021, 12, 25), new Date(), { addSuffix: true });
const today = new Date();
const date = format(today, "'the' do 'of' LLLL y");
console.log(christmas);

const person = document.querySelector(".person");
const button = document.querySelector(".person-creator");
async function createPerson() {
    person.setAttribute("style", "white-space: pre;");
    person.textContent = `
        Hello, my name is
        ${name.firstName()} ${name.lastName()}.
        Today is
        ${date}
    `;
}

function friendList() {
    // creating an array of fake names
    // eslint-disable-next-line prettier/prettier
    const fakeNames = Array.from(
        { length: 10 },
        () => `${name.firstName()} ${name.lastName()}`
    );

    const h2Present = document.querySelector(".friends-list-wrapper");
    if (h2Present) {
        h2Present.parentNode.removeChild(h2Present);
    }

    const h2 = document.createElement("h2");
    h2.classList.add("friends-list-wrapper");
    h2.textContent = "Below are my favourite friends!";

    const ul = document.createElement("ul");
    // eslint-disable-next-line array-callback-return
    fakeNames.map((namePerson) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <li>${namePerson}</li>
            `;
        ul.appendChild(li);
    });
    h2.appendChild(ul);
    person.insertAdjacentElement("afterend", h2);
}

button.addEventListener("click", createPerson);
button.addEventListener("click", friendList);

async function go() {
    console.log("Going");
    await delay(500);
    console.log("Ending");
}

go();

/*
    Working with lodash
*/

const a = [1, 2, 3, 4, 5, 7, 8, 9, 10];
const b = [3, 5, 6, 23, 7, 2, 456];

const repeatedValues = intersection(a, b);
console.log(repeatedValues);

const person1 = { name: "Paulo" };
const person2 = {
    name: "Paulo",
};
// person1 === person2 returns false as they are diferent objects

// to compare the content of two objects use isEqual
// isEqual compares the values inside two objects and returns true or false
console.log(isEqual(person1, person2));

/*
    Working with await-to-js
    handling errors
*/

function checkIfNameIsCool(firstName) {
    return new Promise(function (resolve, reject) {
        if (firstName === "Paulo") {
            return resolve("You got it!");
        }
        reject(new Error("Not the right name!"));
    });
}

async function checkName() {
    const [err, successValue] = await to(checkIfNameIsCool("Paulos"));
    if (err) {
        console.log(err);
    } else {
        console.log(successValue);
    }
}

checkName();
