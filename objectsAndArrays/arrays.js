/*
* ***************
! ARRAYS
* ***************
*/

//? POPULATING AND REFERRING

let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);

// JS counts starting at 0. So in this array, it would be 0-2
// When we call an array, we can append square brackets onto the end of our array with the index number we want to reference. This is SQUARE BRACKET NOTATION.

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];

//console.log(typeof students); //returns object

//console.log(students instanceof Array); // the instanceof operator is used to check the type of an object at run time.
//~ Remember that arrays are technically objects

//console.log(students[2]);

/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/

let marshall = students[1];
let will = students[6][2];

console.log(`Hello ${marshall}!`);
console.log(`Hello ${will}!`);


//? ARRAY METHODS

// We have multiple methods to allow us to manipulate arrays as we may need.

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (foodItem of food) {
  console.log(foodItem);
}

// Add to end of array
food.push('Pizza');
console.log('push:', food);

// Remove and insert
food.splice(1, 1, 'Bananas'); //~ Removes Shrimp and add Banana => (position, how many to remove, what to add)
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log('splice:', food);

// Remove from end
food.pop(); // Removes the last item of an array
console.log('pop:', food);

// Add to start
food.unshift('Popcorn', 'Steak'); // unshift adds 1 or more elements to the beginning of an array
console.log('unshift:', food);

// Remove from start
food.shift(); // shift removes the first element of an array
console.log('shift:', food);

//? LENGTH

// We can use a method called length() that can tell us exactly how many values are within our array

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors.length);

console.log(colors);
console.log(colors.toString());

//? ITERATING

/*
  forEach - 
    - the forEach() method executes a provided function once for each element in an array - much like a for loor or a for of loop

    - runs three arguments
      1. The Value
      2. The Index
      3. The array object itself
*/

let foodList = ['apple', 'pear', 'mushroom', 'cheese', 'peach'];

// for (let i = 0; i < foodList.length; i++) {
//   console.log(foodList[i]);
// }

function logItem(item) {
  console.log(item);
}

// We invoke a callback function for each element in our array
foodList.forEach(logItem);
// A callback function is another function we invoke within our main function

/*
~ Callback function syntax
function print(callback) {
  callback();
}
*/

foodList.forEach((foodItem, index) => {
  console.log(foodItem);
  console.log(index);
})

//~ The second parameter of the callback function is ALWAYS the index

/*
* ***********
! CHALLENGE
* ***********
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ["Good Will Hunting", "Dune", "To Wong Foo", "Hamilton"]

console.log("Displaying movie library...");
movies.forEach((movie, index) => console.log(`${index + 1} - ${movie}`));

let greatestMovie = "The Princess Bride";
movies.push(greatestMovie);

console.log(`\nAdding ${greatestMovie}...`);
movies.forEach((movie, index) => console.log(`${index + 1} - ${movie}`));

let goodSciFi = "The Martian"
let badSciFi = movies.splice(1, 1, goodSciFi);

console.log(`\nReplacing ${badSciFi} with ${goodSciFi}...`);
movies.forEach((movie, index) => console.log(`${index + 1} - ${movie}`));