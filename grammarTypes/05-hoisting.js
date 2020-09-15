/*
* **************
! HOISTING
* **************

  What is Hoisting?
    - JS pulls all variables and function calls to the 'top' of their respective scope prior to being executed.
    - Only the declaration is pulled up, NOT the assignment.

*/

// console.log(hoistedVar);

// console.log('How JS sees hoistedVar:', typeof hoistedVar);

// let hoistedVar = 'using let';
// var hoistedVar = 'using var';

// console.log(noVariable);

var declaration;  // Without assignment
console.log(usage);

declaration = 10; // Assigning our variable
console.log(usage);

var usage = declaration + 10;

console.log(usage);

//? Hoisting in a Function
// This process is considered the same within a function. On the first pass it reads it, pushes the declarations to the top, and then executes them in the order they are written

function testHoist() {
  becomesGlobal = "not declared, it becomes part of the global scope";
  console.log('Prior to declaring ', insideFunc);
  var insideFunc = "Rules still apply here";
  console.log(insideFunc);
}

testHoist();
console.log(becomesGlobal);

// It is best practice to ALWAYS declare variables regardless of whether they are in a function or global scope. This makes it clear how it should be handled.

//? Using LET
// The keyword LET is block scoped and not function scoped

console.log(letVariable);
let letVariable = 'using let';
// This throws a Reference Error due to ES6 not accepting undeclared variables. This is to ensure that we ALWAYS declare our variables FIRST.

//? Hoisting Function
// Function declarations:

hoistedFunc();

function hoistedFunc() {
  console.log('This is a hoisted function');
}

// Function Expressions
// These are NOT hoisted

expressionFunc();

let expressionFunc = function () {
  console.log('Works?');
}