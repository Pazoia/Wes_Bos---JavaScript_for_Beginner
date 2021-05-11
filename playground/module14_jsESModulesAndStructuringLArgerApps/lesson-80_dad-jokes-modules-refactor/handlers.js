import { jokeButton, jokeHolder } from "./elements.js";
import { fetchJoke } from "./lib.js";
import { randomItemFromArray } from "./utils.js";
import buttonText from "./button-text.js";

export async function handleClick() {
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
    // eslint-disable-next-line prettier/prettier
    jokeButton.textContent = randomItemFromArray(
        buttonText,
        jokeButton.textContent,
    );
}
