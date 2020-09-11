/*
* ***************
! TYPES
* ***************

? Data and Structure Types
* ***************
    - Primitive Data Types:
        - boolean
        - undefined
        - number
        - string
            - bigInt*
            - symbol*
    - null
    - bject
    - function
*/

//? BOOLEANS
//* *************

// A boolean has 2 possible values: true and false

let on = true;
let off = false;

console.log(on);
console.log(off);


//? NULL
// A null value is an empty value. Think of it as an empty container that has space to fill

let empty = null;
console.log(empty);

//? UNDEFINED
// No value has been assigned to a container

let undef = undefined;
console.log(undef);
let password;
console.log(password);

/*
    - null is an intentional nothing
        * null you can trust as nothing, undefined not so much
    - undefined is a default value meaning a variable hasn't been set, or created yet.
*/

//? NUMBERS

let degrees = 90;
console.log(degrees);


let precise = 999999999999999; // 15 9's
console.log(precise);

let rounded = 9999999999999999; // 16 9's
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);
// JS rounds out at a certain number, so it math is needed, be aware

let whatIf = (0.2 * 10 + 0.1 * 10);
console.log(whatIf);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);
// console.log('0.' + whatIf);

//? STRINGS
// Strings represent text and can be wrapped in '' or ""

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = 'I\'ve';
console.log(inception, singleQ);

//? Number vs. String

let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);

console.log(typeof addThese);
console.log(typeof addTheseAlso);

// We can use an operator called "typeof" that returns a string that tells us exactly what our variable "type" is.

let stringToNumber = Number('1150');
console.log(stringToNumber);
console.log(typeof stringToNumber);

//? OBJECTS
/* 
    - Objects are used ato store many values instead of a singular value.
    - Consider these as a collection of various properties
    - denoted by curly brackets: {}
*/

let frodo = {
    race: "hobbit", // string
    rings: 1, // number
    sting: true, // boolean
}

console.log(frodo);
console.log(typeof frodo);

//? ARRAYS
/*
    - Containers  that hold a list of items
    - Denoted by square brackets: []
    - All items are within the same square brackets
    - Regardless of data type, each item is separated by a comma
*/

let arrayList = ['pos 1', 'pos 2', 'pos 3'];
console.log(arrayList);
let anotherExample = [1, 2, 'three', true];
console.log(anotherExample);

console.log(typeof anotherExample)
// ! JS classifies arrays as objects and not a data type of their own

//? Addition vs. concatenation
/*
    - JS sees the '+' symbol in two different ways
        - With numbers, it signifies addition and adds the two numbers together mathematically.
        - With strings, it concatenates the strings into 1 string.
 */

let strings = 'one' + ' ' + 'is a number';
let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff);

/* 
* ****************
TODO: CHALLENGE
* ****************

    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).

*/

let firstName = "Conor";
let lastName = "Broaders";
let houseNumber = 1212;
let aptNumber = 12;
let street = "12th Ave";
let city = "Twelvesville";
let state = "IN";
let zipcode = 121212;

//* With concatenation
// console.log(firstName + " " + lastName + "\n" + houseNumber + " " + street + "\n" + city + ", " + state + " " + zipcode);

//* With template literals
console.log(`${firstName} ${lastName}\n${houseNumber} ${street}\n${city}, ${state} ${zipcode}`)

//? String Properties

/*
    - Stings have properties or qualities associated with that string
    - the length of a string is a property
*/

let myName = "Conor";
console.log(myName.length);

//? String Methods
/*
    - Methods are tools that can help us manipulate our data
 */

let myNameIs = "conor broaders";
console.log(myNameIs.toUpperCase()); // This method changes a string to all uppercase
console.log(myNameIs.toLowerCase()); // This method changes a string to all lowercase