/*
* ************
! FOR LOOPS
* ************

  - Loops help us repeat a process without writing a lot of code.

  - We need to:
    1) Create an index
    2) Run a condition
    3) Change to the indexing variable (execution of condition)
*/

for (let i = 0; i <= 10; i++) {
	console.log(i);
}

/*
  - We state out lopp with a "for"
  - Within this function, we are injecting some parameters that JS will run against
    - (index; condition; change index -> result)
    ~ for (<create variable>; <run condition>; <change index>) {<return results>}
      * Will continue until the run condition is met
*/

// let i = 10;
// let x = 20;

// for (i; i <= x; i++) {
// 	console.log(i);
// }

/*
* ************
! CHALLENGE:
* ************
--TODO: Using a for loop, set an index to 2. Make a condition where if that number is greater than -10, change that index by subtracting 4 and console log each iteration
*/

for (let i = 2; i > -10; i -= 4) {
	console.log(i);
}

let word = "supercalifragilisticexpialidocious";

for (let i = 0; i < word.length; i++) {
	console.log(`${i}: ${word[i]}`);
}

/*
* ************
! FORIN LOOPS
* ************
*/

let city = {
	name: "Indianapolis",
	pop: 877000,
	speedway: true,
};

for (info in city) {
	console.log(info);
	console.log(city[info]);
}

/*
  ~ for (variable IN object) {
  ~  <statement>
  ~ }
*/

let list = ["milk", "eggs", "beans", "bread", "bananas"];

for (item in list) {
	// console.log(item);
	console.log(list[item]);
}

/*
* ************
! CHALLENGE:
* ************

What if a user input their name in an odd way and we want to display it correctly.

--TODO: Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

*/

let name = "piCard";
let fullName;

// for (let i = 0; i < name.length; i++) {
// 	if (i === 0) {
// 		fullName += name[i].toUpperCase();
// 	} else {
// 		fullName += name[i].toLowerCase();
// 	}
// }

// for (char in name) {
// 	if (char == 0) {
// 		fullName += name[char].toUpperCase();
// 	} else {
// 		fullName += name[char].toLowerCase();
// 	}
// }

for (char in name) {
	console.log(typeof char);
	char == 0 ? (fullName = name[char].toUpperCase()) : (fullName += name[char].toLowerCase());
}

// ! FOR-IN loops for strings evaluate the variable as an index, not a string
// ! All values of char are truthy

console.log(fullName);

/*
* ************
! FOROF LOOP
* ************

  - In order to run a FOR OF loop, the "thing" must be numbered like an array

  let object = {
    key: value,
    key: value,
    key: value
  }

  for (o of object) {
    <breaks>
  }
*/

let indexArr = ["spot 1", 2, true, "four"];

for (pos of indexArr) {
	console.log(pos);
}

/*
? Quick Recap:
  * For loops: loops through a block of code until a counter reaches a specified number
  * for in loops: loops through properties of an object
  * for of loops: loops over iterable objects as in arrays and strings * Strings can be accessed in much the same way as arrays.
*/
