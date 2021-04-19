console.log("Sarcastic Text Generator");

const textarea = document.querySelector("[name='text']");
const result = document.querySelector(".result");
const filterInputs = document.querySelectorAll("[name='filter']");

function transformText(text) {
    console.log(text);
    result.textContent = text;
}

textarea.addEventListener("input", (e) => transformText(e.target.value));
