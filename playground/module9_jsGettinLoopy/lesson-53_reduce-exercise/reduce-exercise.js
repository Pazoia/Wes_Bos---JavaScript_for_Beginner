console.log("Working with .reduce()");

const text = `
Skip to main content
Skip to search
Technologies
References & Guides
Feedback
Search MDN
Search MDN
Sign in
Web technology for developers
JavaScript
JavaScript reference
Standard built-in objects
String
String.prototype.repeat()
Change language
Table of contents
Syntax
Examples
Polyfill
Specifications
Browser compatibility
See also
String.prototype.repeat()
The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.


Syntax
str.repeat(count)
Parameters
count
An integer between 0 and +Infinity, indicating the number of times to repeat the string.
Return value
A new string containing the specified number of copies of the given string.

Exceptions
RangeError: repeat count must be non-negative.
RangeError: repeat count must be less than infinity and not overflow maximum string size.
Examples
Using repeat()
'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0)   // RangeError

({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2)
// 'abcabc' (repeat() is a generic method)
Polyfill
This method has been added to the ECMAScript 2015 specification and may not be available in all JavaScript implementations yet. However, you can polyfill String.prototype.repeat() with the following snippet:

if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null)
      throw new TypeError('can't convert ' + this + ' to object');

    var str = '' + this;
    // To convert string to integer.
    count = +count;
    // Check NaN
    if (count != count)
      count = 0;

    if (count < 0)
      throw new RangeError('repeat count must be non-negative');

    if (count == Infinity)
      throw new RangeError('repeat count must be less than infinity');

    count = Math.floor(count);
    if (str.length == 0 || count == 0)
      return '';

    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28)
      throw new RangeError('repeat count must not overflow maximum string size');

    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
       str += str;
       count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  }
}
Specifications
Specification
ECMAScript (ECMA-262)
The definition of 'String.prototype.repeat' in that specification.
Browser compatibility
Report problems with this compatibility data on GitHub
desktop	mobile	server
Chrome	Edge	Firefox	Internet Explorer	Opera	Safari	WebView Android	Chrome Android	Firefox for Android	Opera Android	Safari on iOS	Samsung Internet	Node.js
repeat
Full support41	Full support12	Full support24	No supportNo	Full support28	Full support9	Full support41	Full support36	Full support24	Full support28	Full support9	Full support3.0	Full support4.0.0Open
Legend
Full supportFull support
No supportNo support
User must explicitly enable this feature.
See also
String.prototype.concat()
Found a problem with this page?
Source on GitHub
Report a problem with this content on GitHub
Want to fix the problem yourself? See our Contribution guide.
Last modified: Apr 6, 2021, by MDN contributors

Change your language
Select your preferred language
English (US)
 Change language
Related Topics
Standard built-in objects
String
Properties
String length
Methods
String.prototype[@@iterator]()
String.prototype.anchor()
String.prototype.at()
String.prototype.big()
String.prototype.blink()
String.prototype.bold()
String.prototype.charAt()
String.prototype.charCodeAt()
String.prototype.codePointAt()
String.prototype.concat()
String.prototype.endsWith()
String.prototype.fixed()
String.prototype.fontcolor()
String.prototype.fontsize()
String.fromCharCode()
String.fromCodePoint()
String.prototype.includes()
String.prototype.indexOf()
String.prototype.italics()
String.prototype.lastIndexOf()
String.prototype.link()
String.prototype.localeCompare()
String.prototype.match()
String.prototype.matchAll()
String.prototype.normalize()
String.prototype.padEnd()
String.prototype.padStart()
String.raw()
String.prototype.repeat()
String.prototype.replace()
String.prototype.replaceAll()
String.prototype.search()
String.prototype.slice()
String.prototype.small()
String.prototype.split()
String.prototype.startsWith()
String.prototype.strike()
String.prototype.sub()
String.prototype.substr()
String.prototype.substring()
String.prototype.sup()
String.prototype.toLocaleLowerCase()
String.prototype.toLocaleUpperCase()
String.prototype.toLowerCase()
String.prototype.toSource()
String.prototype.toString()
String.prototype.toUpperCase()
String.prototype.trim()
String.prototype.trimEnd()
String.prototype.trimStart()
String.prototype.valueOf()
Inheritance:
Function
Properties
Function.arguments
Function.caller
Function.displayName
Function.length
Function.name
Methods
Function.prototype.apply()
Function.prototype.bind()
Function.prototype.call()
Function.prototype.toSource()
Function.prototype.toString()
Object
Properties
Object.prototype.constructor
Object.prototype.__proto__
Methods
Object.prototype.__defineGetter__()
Object.prototype.__defineSetter__()
Object.prototype.__lookupGetter__()
Object.prototype.__lookupSetter__()
Object.prototype.hasOwnProperty()
Object.prototype.isPrototypeOf()
Object.prototype.propertyIsEnumerable()
Object.setPrototypeOf()
Object.prototype.toLocaleString()
Object.prototype.toSource()
Object.prototype.toString()
Object.prototype.valueOf()
Web Technologies
Learn Web Development
About MDN
Feedback
About
MDN Web Docs Store
Contact Us
Firefox
MDN
Mozilla
© 2005-2021 Mozilla and individual contributors. Content is available under these licenses.

Terms
Privacy
Cookies
`;

// Eleminating the unwanted characters
function isValidChar(char) {
    // if that character is a-zA-Z0-9, we want to keep it
    return char.match(/[a-z0-9]/i);
}

// function lowercase(char) {
//     return char.toLowerCase();
// }
// Same as above but using an arrow function
const lowercase = (char) => char.toLowerCase();

function instanceCounter(counts, char) {
    // eslint-disable-next-line no-unused-expressions
    counts[char] ? (counts[char] += 1) : (counts[char] = 1);
    return counts;
}

function sortByValue(a, b) {
    return a[1] - b[1];
}

const result = text
    .split("") // Split each char into an item of an array
    .filter(isValidChar)
    .map(lowercase) // Convert every letter to lowercase
    .reduce(instanceCounter, {});

const sortedResult = Object.entries(result).sort(sortByValue);

console.table(sortedResult);
