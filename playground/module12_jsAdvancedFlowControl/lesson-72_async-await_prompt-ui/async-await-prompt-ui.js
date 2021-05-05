/* eslint-disable no-async-promise-executor */
console.log("Async Await Prompt UI");

function wait(ms = 0) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
    popup.classList.remove("open");
    await wait(1000);
    // remove the popup entirely
    popup.remove();
    // eslint-disable-next-line no-param-reassign
    popup = null;
}

function ask(options) {
    return new Promise(async function (resolve) {
        // Create a popup with all the fields in it
        const popup = document.createElement("form");
        popup.classList.add("popup");
        popup.insertAdjacentHTML(
            "afterbegin",
            `<fieldset>
                <label>${options.title}</label>
                <input type="text" name="input"/>
                <button type="submit">Submit</button>
            </fieldset>
            `
        );

        console.log(popup);

        // Check if they want a cancel button
        if (options.cancel) {
            const skipButton = document.createElement("button");
            skipButton.type = "button";
            skipButton.textContent = "Cancel";
            popup.firstChild.appendChild(skipButton);
            // TODO: listen for a click on that cancel button
            skipButton.addEventListener(
                "click",
                function () {
                    resolve(null);
                    destroyPopup(popup);
                },
                { once: true }
            );
        }

        // listen for the submit event on the inputs
        popup.addEventListener(
            "submit",
            function (e) {
                e.preventDefault();
                resolve(e.target.input.value);
                // remove popup from DOM entirely
                destroyPopup(popup);
            },
            { once: true }
        );

        // Resolve data that was in the input box when submit button gets clicked

        // Insert popup into the DOM
        document.body.appendChild(popup);
        // put a very small timeout before adding the open class
        await wait(50);
        popup.classList.add("open");
    });
}

// select all the buttons that have a question
/*
    // async function askQuestion(e) {
    //     const button = e.currentTarget;
    //     const cancel = "cancel" in button.dataset;

    //     // eslint-disable-next-line no-unused-vars
    //     const answer = await ask({
    //         title: button.dataset.question,
    //         cancel,
    //     });
    // }

    // const buttons = document.querySelectorAll("[data-question]");
    // buttons.forEach((button) => button.addEventListener("click", askQuestion));
*/

const questions = [
    { title: "What is your name?" },
    { title: "What is your age?", cancel: true },
    { title: "What is your pets name?" },
];

async function asyncMap(array, callback) {
    // make an array to store the results
    const results = [];

    // loop over the given array
    for (const item of array) {
        const result = await callback(item);
        results.push(result);
    }
    // when the loop has finished, return results
    return results;
}

async function go() {
    const answers = await asyncMap(questions, ask);
    answers.forEach((answer) => {
        const li = document.createElement("li");
        li.textContent = answer;
        document.body.appendChild(li);
    });
    console.log(answers);
}

const button = document.querySelector(".askMe");

button.addEventListener("click", go);

/*
    Below function is directed at the questions array
*/
// async function askMany() {
//     for (const question of questions) {
//         const answer = await ask(question);
//         console.log(answer);
//     }
// }

// askMany();
