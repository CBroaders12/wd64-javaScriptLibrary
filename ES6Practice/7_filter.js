const instructors = [
  {name: "Quincy", specialty: "Quantum Mechanics", medals: 2},
  {name: "Kenn", specialty: "Norse Mythology", medals: 8},
  {name: "Paul", specialty: "Tuvan Throat Singing", medals: 4},
  {name: "Aaron", specialty: "Entomology", medals: 7},
  {name: "Carolyn", specialty: "Kung Fu", medals: 5},
  {name: "Tom", specialty: "Chemistry", medals: 3}
];

//? The  "learn to code" way
// let instructorNames = [];

// for(let i = 0; i < instructors.length; i++) {
//   if(instructors[i].medals >= 5){
//     instructorNames.push(instructors[i].name);
//   }
// }

//? The "developer" way

let instructorNames = instructors.filter(instructor => instructor.medals >= 5);

console.log(instructorNames);

let instructorInfo = instructors.filter(instructor => instructor.name == "Aaron");

console.log(instructorInfo);