console.log("Async Await Prompt UI");

function ask(options) {
    return new Promise(function (resolve) {
        // Create a popup with all the fields in it
        const popup = document.createElement("form");
        popup.classList.add("popup");
        popup.insertAdjacentHTML(
            "afterbegin",
            `
            <fieldset>
                <label>${options.title}</label>
            </fieldset>
            `
        );

        console.log(popup);

        // Check if they want a cancel button
        if (options.cancel) {
            const skipButton = document.createElement("button");
            skipButton.type = "button";
            skipButton.textContent = "Cancel";
            // TODO: listen for a click on that cancel button
        }

        // listen for the submit event on the inputs
        // Resolve data that was in the input box when submit button gets clicked

        // Insert popup into the DOM
        document.body.appendChild(popup);
        // put a very small timeout before adding the open class
        setTimeout(function () {
            popup.classList.add("open");
        }, 10);
    });
}
