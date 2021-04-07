console.log("Flow control - if statements, function returns, truthy, falsy");

const age = 100;
if (age > 70 && age < 80) {
    console.log("You're in your 70's");
} else if (age > 60 && age < 70) {
    console.log("You're in you 60's");
} else if (age > 50 && age < 60) {
    console.log("You're in you 50's");
} else {
    console.log("Nothing was true!");
}

function slugify(sentence, lowercase) {
    if (lowercase) {
        return sentence.replace(/\s/g, "-").toLowerCase();
    }
    return sentence.replace(/\s/g, "-");
}

console.log(slugify("You are cool"));
console.log(slugify("I WAS ALL UPPERCASE!!!", true));

const dog = "";

if (dog) {
    console.log("You have a dog");
} else {
    console.log("You don't have a dog");
}

const score = {};

if (score) {
    console.log("There's a score already");
} else {
    console.log("There's no score yet");
}
