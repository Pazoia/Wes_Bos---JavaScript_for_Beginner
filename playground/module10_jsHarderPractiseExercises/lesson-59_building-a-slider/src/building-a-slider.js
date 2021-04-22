function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error("No Slider was passed in");
    }

    // Create some variables for working with the slider
    let current;
    let next;
    let prev;

    // Select the elements needed for the slider
    const slides = slider.querySelector(".slides");
    const prevButton = document.querySelector("goToPrev");
    const nextButton = document.querySelector("goToNext");

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

    // When this slider is created, run the start slider and applyClasses functions
    startSlider();
    applyClasses();
}

Slider(document.querySelector(".slider"));
Slider(document.querySelector(".dog-slider"));
