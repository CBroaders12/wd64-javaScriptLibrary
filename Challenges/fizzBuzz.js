/*
 ! FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
 * **************
  - create a variable named FB that gets initialized with a number
    - write a conditional that:  - 100 range
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - otherwise, prints the number
*/

for (let FB = 1; FB <= 100; FB++) {
  let fizz = (FB % 3 == 0);
  let buzz = (FB % 5 == 0);
  console.log(fizz ? (buzz ? "Fizz Buzz" : "Fizz") : (buzz ? "Buzz" : FB));
}

/*
for (let FB = 1; FB <= 100; FB++) {
  if (FB % 15 === 0) {
    console.log("Fizz Buzz");
  } else if (FB % 5 === 0) {
    console.log("Buzz");
  } else if (FB % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(FB);
  }
}
*/

