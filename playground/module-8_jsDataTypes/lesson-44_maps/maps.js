console.log("Working with maps");

/*
    Advantages of using a Map instead of an object

    * with a Map the order in which it gets display is guaranteed
      to follow the order they are in the Map
    * With a Map there's no need to have a keyword to get some value,
      using get and a variable will retrieve the value attached to the key
      matching the value in the variable.
*/

const myMap = new Map();
// .set()
myMap.set("name", "Paulo");
myMap.set(100, "This is a number");
console.log(myMap);

// .delete()
myMap.delete("name");
console.log(myMap);

const score = 100;
const score1 = 200;
const score2 = 300;
const prizes = new Map();
prizes.set(100, "Bear");
prizes.set(200, "Duck");
prizes.set(300, "Car");

console.log(`You scored ${score}, you win a ${prizes.get(score)}`);
console.log(`You scored ${score1}, you win a ${prizes.get(score1)}`);
console.log(`You scored ${score2}, you win a ${prizes.get(score2)}`);

// select the ul element
const ul = document.querySelector(".prizes");
for (const [points, prize] of prizes) {
    const li = `<li>${points} - ${prize}</li>`;
    ul.insertAdjacentHTML("beforeend", li);
}
