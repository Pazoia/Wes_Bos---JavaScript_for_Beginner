console.log("Shopping form - Custom Events - Delegation - LocalStorage");

const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

// We need an array to hold our state
const items = [];

function displayItems() {
    const html = items
        .map(
            (item) =>
                `<li class="shopping-item">
                <input type="checkbox">
                <span class="itemName">${item.name}</span>
                <button aria-label="Remove ${item.name}">&times;</button>
            </li>`
        )
        .join("");
    list.innerHTML = html;
}

function handleSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.item.value;
    const item = {
        name,
        id: Date.now(),
        complete: false,
    };
    items.push(item);
    e.target.reset();
    // Fire off a custom event that will tell anyone else
    // who cares that the items have been updated!
    list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function mirrorToLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items));
}

function restoreFromLocalStorage() {
    // pull the items from local storage
    const lsItems = JSON.parse(localStorage.getItem("items"));
    if (lsItems.length) {
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent("itemsUpdated"));
    }
}

shoppingForm.addEventListener("submit", handleSubmit);
list.addEventListener("itemsUpdated", displayItems);
list.addEventListener("itemsUpdated", mirrorToLocalStorage);

restoreFromLocalStorage();
