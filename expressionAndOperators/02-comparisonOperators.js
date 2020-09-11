// COMPARISON OPERATORS:
//? EQUAL
'3' == 3;
console.log('3' == 3); // Evaluates to true

/*
    - JavaScript does something called coercion when comparing values with "=="
        - Coercion is the process of changing one type to another (e.g. string --> number)
*/

//? STRICT EQUAL
console.log('3' === 3); // Evaluates to false
console.log(3 === 3); // Evaluates to true

console.log("Bob" == "Bob"); // Evaluates to true

//? NOT EQUAL
console.log('3' != 3) // Evaluates as false due to coercion

//? STRICT NOT EQUAL
console.log('3' !== 3) // Evaluates to true

//? GREATER THAN
3 > 2;

//? LESS THAN
2 < 3;

//? GREATER THAN OR EQUAL TO
3 >= 2; //! DISTINCT FROM "=>""

//? LESS THAN OR EQUAL TO
2 <= 3;

//? AND
2 && 3;

//? OR
2 || 3;