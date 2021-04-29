console.log("Callback Hell to Promise Land");

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
