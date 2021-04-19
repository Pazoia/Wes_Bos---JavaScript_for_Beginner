console.log("Sarcastic Text Generator");

const textarea = document.querySelector("[name='text']");
const result = document.querySelector(".result");
const filterInputs = Array.from(document.querySelectorAll("[name='filter']"));

/* eslint-disable */
const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ' };
  /* eslint-enable */

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
    funky(letter) {
        // first check if there is a funcky letter for this case
        let funckyLetter = funkyLetters[letter];
        if (funckyLetter) return funckyLetter;

        // If there's not, check if there's a lowerCase version
        funckyLetter = funkyLetters[letter.toLowerCase()];
        if (funckyLetter) return funckyLetter;

        // If there's nothing, return regular letter
        return letter;
    },
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
