function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error("No Slider was passed in");
    }

    // Select the elements needed for the slider
    this.slides = slider.querySelector(".slides");
    this.slider = slider;
    const prevButton = slider.querySelector(".goToPrev");
    const nextButton = slider.querySelector(".goToNext");

    // When this slider is created, run the start slider and applyClasses functions
    this.startSlider();
    this.applyClasses();

    // Event Listeners
    prevButton.addEventListener("click", () => this.move("back"));
    nextButton.addEventListener("click", () => this.move());
}

Slider.prototype.startSlider = function () {
    this.current = this.slider.querySelector(".current") || this.slides.firstElementChild;
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function () {
    this.current.classList.add("current");
    this.prev.classList.add("prev");
    this.next.classList.add("next");
};

Slider.prototype.move = function (direction) {
    // First strip all the classes of the current, prev and next slides
    const classesToRemove = ["prev", "next", "current"];
    this.prev.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    if (direction === "back") {
        /*
            Make a new array of the new values, and destructure them
            over and into the prev, current, and next variables
        */
        // prettier-ignore
        [this.prev, this.current, this.next] = [
            // get the prev slide, if there's none, get the last slide
            // from the entire slider for wrapping
            this.prev.previousElementSibling || this.slides.lastElementChild,
            this.prev,
            this.current
        ];
    } else {
        // prettier-ignore
        [this.prev, this.current, this.next] = [
            this.current,
            this.next,
            // get the next slide, or if it's at the end,
            // loop around and grab the first slide
            this.next.nextElementSibling || this.slides.firstElementChild,
        ];
    }

    this.applyClasses();
};

const slider1 = new Slider(document.querySelector(".slider"));
const slider2 = new Slider(document.querySelector(".dog-slider"));

console.log(slider1, slider2);

// Keyboard instructions for slider1
window.addEventListener("keyup", (e) => {
    if (e.key === "6") {
        slider1.move();
    } else if (e.key === "4") {
        slider1.move("back");
    }
});

// Keyboard instructions for slider2
window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") {
        slider2.move();
    } else if (e.key === "ArrowLeft") {
        slider2.move("back");
    }
});
