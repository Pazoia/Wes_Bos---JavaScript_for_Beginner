console.log("Promise Land to Async await");

/*
    Below is Callback hell
*/
const go = document.querySelector(".go");

go.addEventListener("click", function (e) {
    const el = e.currentTarget;
    // 1. Change the text to Go when clicked
    el.textContent = "GO";

    setTimeout(function () {
        // 2. Make it a circle after 2s
        el.classList.add("circle");

        // 3. Make it red after 0.5s
        setTimeout(function () {
            el.classList.add("red");

            // 4. Make it square after 0.25s
            setTimeout(function () {
                el.classList.remove("circle");

                // 5. Make it purple after 0.3s
                setTimeout(function () {
                    el.classList.remove("red");
                    el.classList.add("purple");

                    // 6. Fade out after 0.5s
                    setTimeout(function () {
                        el.classList.add("fadeOut");
                    }, 500);
                }, 300);
            }, 250);
        }, 500);
    }, 2000);
});

/*
    Converting Callback hell into Promise Land
*/

const go1 = document.querySelector(".go1");

function wait(ms = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

function animate(e) {
    const el = e.currentTarget;
    // 1. Change the text to Go when clicked
    el.textContent = "GO";

    // 2. Make it a circle after 2s
    wait(2000)
        .then(() => {
            el.classList.add("circle");

            // 3. Make it red after 0.5s
            return wait(500);
        })
        .then(() => {
            el.classList.add("red");

            // 4. Make it square after 0.25s
            return wait(250);
        })
        .then(() => {
            el.classList.remove("circle");

            // 5. Make it purple after 0.3s
            return wait(300);
        })
        .then(() => {
            el.classList.remove("red");
            el.classList.add("purple");

            // 6. Fade out after 0.5s
            return wait(500);
        })
        .then(() => {
            el.classList.add("fadeOut");
        });
}

go1.addEventListener("click", animate);

/*
    Converting Promise Land to Async await
*/

const go2 = document.querySelector(".go2");

async function animate2(e) {
    const el = e.currentTarget;
    // 1. Change the text to Go when clicked
    el.textContent = "GO";

    // 2. Make it a circle after 2s
    await wait(2000);
    el.classList.add("circle");

    // 3. Make it red after 0.5s
    await wait(500);
    el.classList.add("red");

    // 4. Make it square after 0.25s
    await wait(250);
    el.classList.remove("circle");

    // 5. Make it purple after 0.3s
    await wait(300);
    el.classList.remove("red");
    el.classList.add("purple");

    // 6. Fade out after 0.5s
    await wait(500);
    el.classList.add("fadeOut");
}

go2.addEventListener("click", animate2);
