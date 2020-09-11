/*
* **********
! VARIABLES
* **********
*/

console.log('hello');
// Debugging tool to see what a script is doing at a specific point

let a = 2;

/*
- let : is the KEYWORD
- a: is the NAME of the variable
- =: is the ASSIGNMENT OPERATOR
- 2: is the variable VALUE
*/

let b = 1;

console.log(a + b);

//! RESTRICTIONS
/*
    - a variable name must begin with a letter, underscore, or dollar sign
    - numbers may follow the above characters, but may not come first
    - javaScript is case sensitive - "hello" and "Hello"  are different variable names
    - no spaces are allowed in variable names
    - camelCase is the best practice for naming
    - ex:
        let myName = "Eric";
        is easier to read than
        let myname = "Eric";
*/

let startingWithLetter = "Works";
let _startWithUnderscore = "Works";
let $startWithDollarSign = "Works";
// let 4startWithNumber = "Breaks";

console.log(startingWithLetter, _startWithUnderscore, $startWithDollarSign);

let PascalCase;
let camelCase;
let snake_case;
let mEmEcAsE = "NEVER!"

/*
* KEYWORDS

var, let, and const

    - var: 'old' keyword that stand for variable. ** We won't be using this often but it is still viable.

    - let: 'new' keyword for variable (Introduced with ES6 *Newest verson of ECMAScript, which is a standardization of JS).

    - const: also 'new' keyword that declares an UNCHANGEABKE, or constant, variable.
*/

var variable = 'var variable'
let letVariable = 'let variable'

// let function = 1; cannot use reserved words within a variable name - * function is a reserved word

/*
* **********
! DECLARATIONS AND INITIALIZATIONS
* **********
*/

// Declarations are the LEFT SIDE of the assignment operator
// * let x;

// Initializations are the RIGHT SIDE of the assignment operator

// * let x = 10; // 10 is the initialization

let y;
console.log("declaration:", y);

y = 10;
console.log("initilization:", y);

y = 33;
console.log("reinitialization:", y);

// We've set our variables with the "let" keyword. With each iteration, we have redeclared what it is.

//? const

let today = "Great!";
const efa = "Wonderful!";
console.log(today, efa);

today = "Awesome!";
console.log(today, efa);

// efa = "Super";
// console.log(today, efa);
// const allows us to make a variable that we don't want to change
