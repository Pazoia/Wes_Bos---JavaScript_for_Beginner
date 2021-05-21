import { isValidColor } from "./colors.js";

export function handleResult({ results }) {
    const words = results[results.length - 1][0].transcript;
    // lowercase everything
    let color = words.toLowerCase();
    // strip any spaces out
    color = color.replace(/\s/g, "");
    // check if it is a valid color
    if (!isValidColor(color)) return; // do nothing
    // if it is, then show the UI for it
    const colorSpan = document.querySelector(`.${color}`);
    colorSpan.classList.add("got");
    // change the backgroung color
    document.body.style.backgroundColor = color;
}
