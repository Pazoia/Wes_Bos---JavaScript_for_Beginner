import { handleResult } from "./handlers.js";
import { colorsByLength, isDark } from "./colors.js";

const colorsEl = document.querySelector(".colors");

function displayColors(colors) {
    // eslint-disable-next-line prettier/prettier
    return colors
        .map(
            (color) =>
                `<span 
                    class="color ${color} ${isDark(color) ? "dark" : ""}" 
                    style="background: ${color};"
                    >${color}
                </span>`
        )
        .join("");
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
    // check if browser supports Speech Recognition
    if (!("SpeechRecognition" in window)) {
        console.log("Sorry your browser does not support Speech Recognition");
        return;
    }
    // if it supports Speech Recognition
    // make a new speech recognition
    // eslint-disable-next-line no-undef
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = handleResult;
    recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);
