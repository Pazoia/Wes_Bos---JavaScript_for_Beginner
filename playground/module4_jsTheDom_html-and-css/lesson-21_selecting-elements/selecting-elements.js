console.log("Selecting elements");

// The statement below will select the first instance of the element p
const p = document.querySelector("p");

// The statement below will select all the instances of the element p
/*
    It'll return a node list, a node list is similar to an array
    but it does not have as many methods as an array has
*/
const p1 = document.querySelectorAll("p");

console.log(p);
console.log(p1);

// Returning all the images in class item divs
const allImgs = document.querySelectorAll(".item img");

// Returning the first occurence of img in a class item div
const firstImage = document.querySelector(".item img");

console.log(allImgs);
console.log(firstImage);

// Looking inside an element you already have
const selectingImageClassClass = document.querySelector(".item2");
// Using querySelector in the variable/element above
const item2Image = selectingImageClassClass.querySelector("img");

console.log(selectingImageClassClass);
console.log(item2Image);
