/*
* ************
! CLASSES
* ************
  - Classes can be defined by either expression or declaration.
  - Classes are functions.
  - Classes act as a blueprint for creating objects.
    ex: model could  be a propery of a class of Automobile. Each new automobile we create is a copy of our original class and could have a different value for the property model.
  - Body of a class is between {}
  - Constructor method is a special method for creating and initializing an object that was created with a class.
    - There can only be ONE constructor method
    - Can use the keyword SUPER
    - The SUPER keyword is used to access and call functions on an object parent.
  - Introduced in ES5
  - New way to write previous existing prototype-based inheritance
  - Closest thing in vanilla JS to OOP
*/

/*
* ************
! CLASS DECLARATION
* ************
*/

class Automobile {
  // instanced properties must be defined inside of the class methods, like the constructor method
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

// Hoisting: unlike function declarations, class declarations are not hoisted. A class declaration needs to be declared before accessing it.

/*
* ************
! CLASS EXPRESSION
* ************
  -  Can be named or not named
  - THe name given to an unnamed class expression is local to the class's body
    - The name of a named class can  be retrieved through the class's name property
*/

//* unnamed
let Vehicle = class {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
};
// console.log(Vehicle.name);

//* named
let Auto = class Mobile {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
};
// console.log(Auto.name);

/*
* ************
! METHODS
* ************
  - Introduced in ES5
    - Prototype methods are shorter for method definitions
*/

// Method definition: OLD SYNTAX
const automobile = {
  start: function () {
    //
  },
  stop: function () {
    //
  }
};

// Prototype Method:  NEW SYNTAX
const autoMobile = {
  start() {
    //
  },
  stop() {
    //
  }
};

class AutoMobile {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Method 1
  start() {
    console.log(`This ${this.make} ${this.model}'s engine started.`);
  }

  // Method 2
  stop() {
    console.log(`This ${this.make} ${this.model}'s engine stopped.`);
  }
};

/*
* ************
! NEW INSTANCE
* ************
  - Using the keyword NEW we can create a new object/instance of the AutoMobile class.
*/

//new object/instance of the class
let hondaCivic = new AutoMobile('Honda', 'Civic');
hondaCivic.start();
hondaCivic.stop();

let fordEscape = new AutoMobile('Ford', 'Escape');
fordEscape.start();
fordEscape.stop();

/*
* ************
! CONSTRUCTOR METHOD
* ************
  - Helps create and intitializes an object created from a class
  - Works along with the NEW keyword
  - Needs to be included to create new objects and instances of our class
    - Set properties
    - Passes values for properties
*/

class Cookie {
  constructor(type, icing, shape) {
    // the parameters we note will be the values we want passed and stored in the object.
    this.t = type;
    this.i = icing;
    this.s = shape;
    // LEFT SIDE:  assigning our keys for the values we pass in.
    // RIGHT SIDE: the accepted values from our parameters
  }
};

let chocolateChip = new Cookie('chocolate chip', false, 'circle');
// console.log(chocolateChip.t);
// console.log(chocolateChip.i);
// console.log(chocolateChip.s);
// console.log(chocolateChip);

/*
* ************
! EXTENDS
* ************
  -  keyword used in class declarations/expressions to create a new class
  - each new class createdinherits the properties and methods from the parent class.
  - Can gave it's own properties and methods
    - Also known as a subclass
*/

//* PARENT
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} eats their food.`);
  }
}

//* SUBCLASS
class Dog extends Animal {
  constructor(name, breed) {
    super(name); //SUPER prior to THIS keyword will cause an error
    this.type = breed;
  }

  play() {
    console.log(`The ${this.type} named ${this.name} fetches the ball!`);
  }
}

let Fido = new Dog('Fido', 'mutt');
Fido.eat();
Fido.play();