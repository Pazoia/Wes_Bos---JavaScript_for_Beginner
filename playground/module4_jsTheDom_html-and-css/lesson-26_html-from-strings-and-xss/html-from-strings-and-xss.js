console.log("HTML from strings and XSS");

const item = document.querySelector(".item");

// This is a getter!!!
console.log(item.innerHTML);

// This is a setter
// item.innerHTML = `
//     // <div>
//     //     <h2>I am now an h2 element</h2>
//     // </div>
// `;
console.log(item.innerHTML);

const picWidth = 400;
const picHight = 400;
const src = `https://source.unsplash.com/random/${picWidth}x${picHight}`;
/*
    Below is an example of how someone could pass
    javascript code through an input element on a page.
*/
const desc = `
    I was added using <br>
    item.innerHTML = myHTML
`;
const myHTML = `
    <div class="wrapper">
        <h2>${desc}</h2>
        <img src="${src}" alt="${desc}"/>
    </div>
`;
console.log(`myHTML is a ${typeof myHTML}`);
/*
    This is one way to add and edit
    an element created with javascript.
    Using .innerHTML
*/
// Adding string to the Dom
item.innerHTML = myHTML;

// Editing the element now in the Dom
const itemImage = document.querySelector(".wrapper img");
console.log(itemImage);

function toggleRound() {
    if (itemImage.classList.contains("round")) {
        itemImage.classList.remove("round");
    } else {
        itemImage.classList.add("round");
    }
}

itemImage.addEventListener("click", toggleRound);

/*
    This is another way to add the
    newly created elements into the Dom
    Using document.createRange().createContextualFragment();
*/

const picWidth1 = 400;
const picHight1 = 400;
const src1 = `https://source.unsplash.com/random/${picWidth1}x${picHight1}`;
/*
    Below is an example of how someone could pass
    javascript code through an input element on a page
    using the img element to pass the onload instructions.
*/
const desc1 = `
    I was added using: <br> 
    document.createRange() <br>
    .createContextualFragment();
    <img onload="alert('You were HACKED')" src="https://source.unsplash.com/random/50x50"/>
`;
const myHTML1 = `
    <div class="wrapper">
        <h2>${desc1}</h2>
        <img src="${src1}"/>
    </div>
`;
console.log(`myHTML is a ${typeof myHTML1}`);

// Turn a string into a Dom element
const myFragment = document.createRange().createContextualFragment(myHTML1);

document.body.appendChild(myFragment);
