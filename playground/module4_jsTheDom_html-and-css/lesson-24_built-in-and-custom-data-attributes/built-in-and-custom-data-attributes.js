console.log("Built in and Custom data Attributes");

// An attribute is anything that is provided to an element
// such as:
/*
    class=""
    id=""
    src=""
*/

const pic = document.querySelector(".nice");

// This is a setter
pic.alt = "I change everytime you refresh the browser";

// This is a getter
console.log(pic.alt);

// This is returning 0 because the browser hasn't
// loaded the image yet when this code was run
console.log(pic.naturalWidth);

// With the instructions below the console.log() statement
// will only run when the whole html, javascript and css is loaded
pic.addEventListener("load", function () {
    console.log(pic.naturalWidth);
});

/*
    Custom data attributes
*/

const custom = document.querySelector(".custom");

console.log(custom.dataset);

custom.addEventListener("click", function () {
    alert(`Welcome ${custom.dataset.first} ${custom.dataset.last}`);
});
