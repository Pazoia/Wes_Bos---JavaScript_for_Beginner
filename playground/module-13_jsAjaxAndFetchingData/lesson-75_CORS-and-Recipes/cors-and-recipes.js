console.log("CORS and Recipe");

const baseEndpoint = "http://www.recipepuppy.com/api";
const proxy = "https://cors-anywhere.herokuapp.com/";
const form = document.querySelector("form.search");
const recipesGrid = document.querySelector(".recipes");

async function fetchRecipes(query) {
    const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
    const data = await res.json();
    return data;
}

function displayRecipes(recipes) {
    const html = recipes.map(
        (recipe) => `<div class="recipe">
        <h2>${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
        <div>
        ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}">`}
        </div>
        <a href="${recipe.href}">View Recipe →</a>
        </div>`
    );
    recipesGrid.innerHTML = html.join("");
}

async function handleSubmit(event) {
    event.preventDefault();
    const searchForm = event.currentTarget;
    // turn the form off
    searchForm.submit.disabled = true;
    // submit the search
    const recipes = await fetchRecipes(searchForm.query.value);
    searchForm.submit.disabled = false;
    displayRecipes(recipes.results);
}

form.addEventListener("submit", handleSubmit);

fetchRecipes("pizza");
