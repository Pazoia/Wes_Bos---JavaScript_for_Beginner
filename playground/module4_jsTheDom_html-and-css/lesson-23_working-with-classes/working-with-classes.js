console.log("Working with Classes");

const pic = document.querySelector(".nice");
console.log(pic.classList);

// Adding a class to an element tag
pic.classList.add("open");
console.log(pic.classList);

// Removing a class from an element tag
pic.classList.remove("cool");
console.log(pic.classList);

// Adding and removing a class to an element using the toggle method
function toggleRound() {
    pic.classList.toggle("round");
    console.log(pic.classList);
}

pic.addEventListener("click", toggleRound);
