/*
* *************
! ARROW FUNCTIONS
* *************

Shorter syntax to write a function that can be written in 1 of 2 ways, CONCISE and BLOCK BODY.

~ Arrow functions do NOT get hoisted.

*/

function regFunc() {
  console.log("Regular");
}

regFunc();

//      (1)     (2) (3)       (4)
let arrowFunc = () => console.log("Arrow Function");
arrowFunc(); // Still need to invoke the function

/*
  1. Arrow Functions are ALWAYS anonymous
  2. Parameters are still capable of being injected
    - If we only have one parameter, we technically don't need the parens ()
    - BUT if we are not passing any parameters, it is REQUIRED to denote ()
  3. This syntax tells JS that we are about to process a function.
  4. With this format, JS assumes the return statement.
*/

//? CONCISE vs. BLOCK BODY

//* Concise:

let cBody = (x, y) => console.log(x + y);
cBody(1, 2);

let slightlyComplex = (x, y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them`);

slightlyComplex(3, 1);
slightlyComplex(1, 5);

//* Block:

let blockArrow = (x, y) => {
  return `${x} are within a ${y}`;
}

console.log(blockArrow('We', 'Block Body'));

// Don't need parens for 1 parameter
let sampleBlock = x => {
  console.log(x);
}

sampleBlock(99);