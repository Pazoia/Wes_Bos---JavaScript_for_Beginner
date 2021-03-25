console.log("Scroll events and Intersection observer");

const terms = document.querySelector(".terms-and-conditions");
// const watch = document.querySelector(".watch");
const button = document.querySelector(".accept");

let ob = "";

function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        console.log("Wroking");
        // Stop observing the button once its clickable
        ob.unobserve(terms.lastElementChild);
    }
}

ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});

ob.observe(terms.lastElementChild);
