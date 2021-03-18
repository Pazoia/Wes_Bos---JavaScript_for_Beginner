console.log("Etch a Sketch");

// Select the elements on the page - canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakeButton = document.querySelector(".shake");
const MOVE_AMOUNT = 30;

// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas
// de-structuring
const { width, height } = canvas;

// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
    console.log(key);
    // increment the hue
    hue += 5;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    // start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move our x and y values depending on what the user did
    switch (key) {
        case "ArrowUp":
            y -= MOVE_AMOUNT;
            break;
        case "ArrowDown":
            y += MOVE_AMOUNT;
            break;
        case "ArrowLeft":
            x -= MOVE_AMOUNT;
            break;
        case "ArrowRight":
            x += MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// Write a handler for the keys
function handleKey(e) {
    if (e.key.includes("Arrow")) {
        e.preventDefault();
        draw({ key: e.key });
    }
}

// Clear / shake function
function clearCanvas() {
    canvas.classList.add("shake");
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener(
        "animationend",
        function () {
            console.log("Done the shake!");
            canvas.classList.remove("shake");
        },
        { once: true }
    );
}

// Listen for the arrow keys
window.addEventListener("keydown", handleKey);
shakeButton.addEventListener("click", clearCanvas);
