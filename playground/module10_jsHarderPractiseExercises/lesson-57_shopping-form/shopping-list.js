console.log("Shopping form - Custom Events - Delegation - LocalStorage");

const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

// We need an array to hold our state
const items = [];

function handleSubmit(e) {
    e.preventDefault();
    console.log("Submited!!!");
    const name = e.currentTarget.item.value;
    const item = {
        name,
        id: Date.now(),
        complete: false,
    };
    items.push(item);
    e.target.reset();
}

shoppingForm.addEventListener("submit", handleSubmit);
