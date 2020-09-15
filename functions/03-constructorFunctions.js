/*
* ******************
! CONSTRUCTOR FUNCTIONS
* ******************

- Functions allow us to easily create a unique solution for different circumstances by using parameters
  - Creating several different objects with the same keys but different values

*/

// Option 1: Do it manually
let person1 = {
  nam: 'Macy',
  age: 24,
  canVote: true
};
let person2 = {
  nam: 'Jeremy',
  age: 15,
  canVote: false
};
let person1 = {
  nam: 'Tyler',
  age: 38,
  canVote: true
};

// Option 2:
//  (1)   (2)         (3)
function Person(name, age, canVote) {
  //(4) (5)   (6)
  this.name = name;
  this.age = age;
  this.canVote = canVote;
}

//console.log(typeof Person);

//            (7)  (8)
let person4 = new Person('James', 80, true);
console.log(person4);

/*
  1. The keyword (function)
  2. The function NAME. For Constructor function the name should be capitalized
  3. The parameters. These will be the object's values once the function is in use
  4. The 'this' keyword. 'this' gives us the ability to refer back to whatever called, or whatever activates it. In this case, 'this' refers to 'Person'
  5. This will be the key of the new object we will create. This is NOT referring to the parameter
  6. This is referring to the parameter we passed through
  7 & 8: This 'new' keyword is calling our Person function, creating a new person with the values we pass as arguments, and storing that person in a variable.
*/