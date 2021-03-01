/* eslint-disable */

console.log(`data types strings`);

// string with single quotes
const first = 'Paulo';

// string with double quotes
const middle = "Jorge";

// string with backticks
const last = `Azoia`;

// escaping a character you want in a sentence
// using backslash
let sentence = 'she\'s so cool';
// in the above scenario you can use double quotes to avoid using the backslash
sentence = "she's so cool";

// using backticks it covers both scenarios
// you can add both single or double quotes without causing problems on your code
sentence = `she's so "cool"`;

// multi-line strings:

/* bellow is an example of a multi-line string using single quotes, 
    this needs a backslash on every line break to work  */ 
const song = 'Ohhh\
\
ya\
\
I like\
\
pizza';

// a better way to write multi-line string is using backticks
// they keep the breaks you implement in each new line.
const song1 = `Ohhh

ya

I like
pizza`;

// concatination with single or double quotes:
const hello = "Hello my name is " + first + ". Nive to meet you";

// interpolation with backticks
const hello1 = `Hello my name is ${first}. Nice to meet you`;
const hello2 = `Hello my name is ${first}. I'm ${100 + 1} years old!!!`;