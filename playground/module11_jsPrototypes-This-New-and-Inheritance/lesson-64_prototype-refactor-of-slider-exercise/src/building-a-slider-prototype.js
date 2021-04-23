function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error("No Slider was passed in");
    }

    // Create some variables for working with the slider
    let next;
    let current;
    let prev;

    // Select the elements needed for the slider
    const slides = slider.querySelector(".slides");
    const prevButton = slider.querySelector(".goToPrev");
    const nextButton = slider.querySelector(".goToNext");

    function startSlider() {
        current = slider.querySelector(".current") || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
    }

    function applyClasses() {
        current.classList.add("current");
        prev.classList.add("prev");
        next.classList.add("next");
    }

    function move(direction) {
        // First strip all the classes of the current, prev and next slides
        const classesToRemove = ["prev", "next", "current"];
        prev.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        if (direction === "back") {
            /*
                Make a new array of the new values, and destructure them
                over and into the prev, current, and next variables
            */
            // prettier-ignore
            [prev, current, next] = [
                // get the prev slide, if there's none, get the last slide
                // from the entire slider for wrapping
                prev.previousElementSibling || slides.lastElementChild,
                prev,
                current
            ];
        } else {
            // prettier-ignore
            [prev, current, next] = [
                current,
                next,
                // get the next slide, or if it's at the end,
                // loop around and grab the first slide
                next.nextElementSibling || slides.firstElementChild,
            ];
        }

        applyClasses();
    }

    // When this slider is created, run the start slider and applyClasses functions
    startSlider();
    applyClasses();

    // Event Listeners
    prevButton.addEventListener("click", () => move("back"));
    nextButton.addEventListener("click", move);
}

Slider(document.querySelector(".slider"));
Slider(document.querySelector(".dog-slider"));
