console.log("Traversing and Removing nodes");

const image = document.querySelector(".cool");
image.classList.add("round");

/*
    <p class="paulo">
        "I am Paulo, I"  // I am a node
        <em>love</em>  // I am a node
        " to bbq and "  // I am a node
        <strong>Learning javascript</strong>  // I am a node
        "!!!"  // I am a node
    </p>
*/

const paulo = document.querySelector(".paulo");

// Below are some properties that apply to Elements
console.log(paulo.children);
console.log(paulo.firstElementChild);
console.log(paulo.lastElementChild);
console.log(paulo.previousElementSibling);
console.log(paulo.nextElementSibling);
console.log(paulo.parentElement);

// Below are some properties that apply to Nodes
console.log(paulo.childNodes);
console.log(paulo.firstChild);
console.log(paulo.lastChild);
console.log(paulo.lastChild.previousSibling);
console.log(paulo.firstChild.nextSibling);
console.log(paulo.parentNode);

const p = document.createElement("p");
p.textContent = "I will be removed";
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);
