/*
* **************
! CONDITIONALS
* **************

? FALSY VALUES:
	- false
	- 0
	- "", '', ``
	- null
	- undefined
	- NaN (Not a Number)

	~ When JS expects a boolean and receives one of the above it is evaluated as 'falsy'
*/

/*
* *************
! IF
* *************

		- "If" something is true, do "this thing"

*/

let light = "off";

if (light === "on") {
	console.log("The light is on");
}

let weather = 68;

if (weather <= 70) {
	console.log("Wear a jacket");
}

let rain = "maybe";

if (weather < 70 && rain) {
	console.log("It is a little chilly and will possibly rain");
}

/*
* *************
! IF ELSE
* *************

	- If/Else Statements allow us to write out a chain of events
*/

let today = 75;

if (today < 70) {
	console.log("It is " + today + ", wear a jacket.");
} else {
	console.log("It is " + today + ", no jacket needed.");
}

/*
* ***************
! CHALLENGE 1:
* ***************

//todo:   Write an if else statement that checks your name;
//todo:   If it is your name, console log '<name>'
//todo:   If the name does not match, console.log 'Hello, what is your name?'
*/

let name = "Bob";

if (name === "Conor") {
	console.log("My name is " + name + ".");
} else {
	console.log("Hello, what is your name?");
}

/*
* **************
! ELSE IF
* **************

	- This is an additional condition to check if the above is not met
*/

let cookTime = 45;

if (cookTime === 45) {
	console.log("Let us feast!");
} else if (cookTime >= 30) {
	console.log(`It has only been ${cookTime} minutes. Wait another 5-15 minutes.`);
} else if (cookTime >= 20) {
	console.log(`It has only been ${cookTime} minutes. Wait another 15-25 minutes.`);
} else {
	console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it.`);
}

// The end of the ELSE IF statements should have a simple "else" to finish it

/*
* **************
! CHALLENGE 2:
* **************

	//todo: Set a variable of age and give it a number of your choice
	Create an else if statement that checks the following:
	//todo: If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
	//todo: If the age is at least 18, console.log 'You can vote!'
	//todo: If the age is at least 21, console.log 'You can drink!'
	//todo: If the age is at least 25, console.log 'You can rent a car!'

*/

let age = 17;

if (age >= 25) {
	console.log("You can rent a car!");
} else if (age >= 21) {
	console.log("You can drink!");
} else if (age >= 18) {
	console.log("You can vote!");
} else if (age >= 16) {
	console.log("You can drive, although that doesn't mean you should...");
} else {
	console.log("Sorry, you're too young to do anything.");
}

/*
* ***************
! TERNARIES
* ***************

	- Quick way to write out an if/else statement

	*/

let myName = "Ann";

// if (myName === "Conor") {
// 	console.log("My name is " + myName + ".");
// } else {
// 	console.log("Hello, what is your name?");
// }

myName === "Conor" ? console.log(`Hello, my name is ${myName}.`) : console.log(`Hello, is your name ${myName}`);

// condition ? if true : else result

/*
* ***************
! CHALLENGE 3:
* ***************

//todo: Take this if/else statement and make it into a ternary.

let lampOn = false;
let daytime = true;
if(lampOn == true && daytime != true) {
		console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
		console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
		console.log('The lamp is on during the day')
} else if(lampOn != true && daytime == true) {
		console.log('The lamp is off during the day')
} else {
		console.log('What lamp?')
}

*/

let lampOn = false;
let daytime = false;

// lampOn && !daytime
// 	? console.log("The lamp is on during the night")
// 	: !lampOn && !daytime
// 	? console.log("The lamp is off during the night")
// 	: lampOn && daytime
// 	? console.log("The lamp is on during the day")
// 	: !lampOn && daytime
// 	? console.log("The lamp is off during the day")
// 	: console.log("What lamp?");

// lampOn
// 	? daytime
// 		? console.log("The lamp is on during the day")
// 		: console.log("The lamp is on during the night")
// 	: daytime
// 	? console.log("The lamp is off during the day")
// 	: console.log("The lamp is off during the night");

console.log(`The lamp is ${lampOn ? "on" : "off"} during the ${daytime ? "day" : "night"}`);

/*
* ***************
! SWITCH
* ***************

	- Executes a block of code depending on different cases

*/

let instructor = "Eric";

switch (instructor) {
	case "Ing":
		console.log(`${instructor} is a part of the Web Dev Team.`);
		break;
	// * Once each case has been evaluated and we return a result, we need to "break" from the switch statment or it will check all of the cases.
	case "Zach":
		console.log(`${instructor} is a part of the Web Dev Team.`);
		break;
	case "Josh":
		console.log(`${instructor} is a part of the Software Dev Team.`);
		break;
	default:
		console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);
		break;
	// * Need to include a default to catch the cases that don't match any of the given cases.
}

instructor = "Amanda";

switch (instructor) {
	case "Ing":
	case "Adam":
	case "Eric":
	case "Zach":
	case "Donovan":
		console.log(`${instructor} is a part of the Web Dev Team.`);
		break;
	case "Josh":
	case "Amanda":
	case "Casey":
		console.log(`${instructor} is a part of the Software Dev Team.`);
		break;
	default:
		console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);
		break;
}

//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

let gradeValue = 87;
let letterGrade;

switch (true) {
	case gradeValue >= 89:
		letterGrade = "A";
		break;
	case gradeValue >= 79:
		letterGrade = "B";
		break;
	case gradeValue >= 66:
		letterGrade = "C";
		break;
	case gradeValue >= 59:
		letterGrade = "D";
		break;
	default:
		letterGrade = "F";
		break;
}

console.log(`${gradeValue}: ${letterGrade}`);