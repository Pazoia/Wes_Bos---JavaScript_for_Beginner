console.log("Sarcastic Text Generator");

const textarea = document.querySelector("[name='text']");
const result = document.querySelector(".result");
const filterInputs = Array.from(document.querySelectorAll("[name='filter']"));

const filters = {
    sarcastic(letter, index) {
        // if it is odd, it will return 1, and that is truthy
        // so this if statement will trip
        if (index % 2) {
            return letter.toUpperCase();
        }
        // if it's even, it will return 0 and we will lowercase it.
        return letter.toLowerCase();
    },
    funky() {},
    unable() {},
};

function transformText(text) {
    // const filter = document.querySelector("[name='filter']:checked").value;
    const filter = filterInputs.find((input) => input.checked).value;

    // take the text, and loop over each letter.
    const mod = Array.from(text).map(filters[filter]);
    result.textContent = mod.join("");
}

textarea.addEventListener("input", (e) => transformText(e.target.value));
