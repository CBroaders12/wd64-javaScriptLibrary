const instructors = [
  {name: "Quincy", specialty: "Quantum Mechanics"},
  {name: "Kenn", specialty: "Norse Mythology"},
  {name: "Paul", specialty: "Tuvan Throat Singing"},
  {name: "Aaron", specialty: "Entomology"},
  {name: "Carolyn", specialty: "Kung Fu"}
];

//? The "Learning to code way"
// let instructorNames = [];

// for(let i = 0; i < instructors.length; i++) {
//   instructorNames.push(instructors[i].name);
// }

//? The "Developer" way
let instructorNames = instructors.map(instructor => instructor.name);

console.log(instructorNames);

//Practice
let instructorInfo = instructors.map(instructor => `${instructor.name}: ${instructor.specialty}`);
console.log(instructorInfo);

let kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];
console.log(kvArray);

let reformattedArray = kvArray.map(oldObject => {
  reformattedObj = {};
  reformattedObj[oldObject.key] = oldObject.value;
  console.log(reformattedObj);
  return reformattedObj;
});