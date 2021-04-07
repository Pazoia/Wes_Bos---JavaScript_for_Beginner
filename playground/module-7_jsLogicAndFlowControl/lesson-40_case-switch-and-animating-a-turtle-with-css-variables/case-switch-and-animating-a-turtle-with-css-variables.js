console.log("Case switch and Animating a turtle with CSS variables");

const turtle = document.querySelector(".turt");

let x = 0;
let y = 0;
const speed = 25;
let flipped = false;
let rotate = 0;
/* eslint-disable */
function handleKeyDown(event) {
    // if it's not an arrow key we don't care
    if (!event.key.includes("Arrow")) { return; }
    switch (event.key) {
        case "ArrowUp":
            y = y - 1;
            rotate = -90;
            break;
        case "ArrowDown":
            y = y + 1;
            rotate = 90;
            break;
        case "ArrowLeft":
            x = x - 1;
            rotate = 0;
            flipped = true;
            break;
        case "ArrowRight":
            x = x + 1;
            rotate = 0;
            flipped = false;
            break;
        default:
            console.log("That is not a valid move");
            break;
    }
    turtle.setAttribute('style', `
        --leftRight: ${flipped ? '180deg' : '0'};
        --upDown: ${rotate}deg;
        --x: ${x * speed}px;
        --y: ${y * speed}px;
    `);
}

window.addEventListener("keydown", handleKeyDown);
