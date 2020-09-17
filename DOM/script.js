let x = 10;
console.log(x);

//! getElementById

// console.dir(document);
// console.log(document.body)

// document.getElementById('testParagraph').style.color = 'blue';

let testPara = document.getElementById('testParagraph');
testPara.style.color = 'red';
console.log(testPara);

//console.dir(testPara);

//~ Will only get you the first ID (hence why you only use IDs once)

//! 2: Query Selector All & innerText/innerHTML

console.log(document.querySelectorAll('p.sampleClass'));
// querySelectorAll returns a NodeList
// Node are items in HTML like elements and text

document.querySelectorAll('p.sampleClass')[2].innerText = 'My text has changed!'
document.querySelectorAll('p.sampleClass')[2].id = 'number-3'

console.log(document.querySelectorAll('p.sampleClass')[2]);
// Bracket notation to access the array of elements
// innerText allows us to reference or change the text in that element

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
  // pTag.innerText = "My text has changed using a forEach() method."
  // pTag.textContent = "My text has changed using a forEach() method."
  pTag.innerHTML = "My text has changed using a forEach() method."
});

let showSpan = document.getElementById('spanTest');

console.log(showSpan.innerText);
console.log(showSpan.textContent);
console.log(showSpan.innerHTML);

/*
  - innerText allows us to diplay or reference text. Only returns visible text
  - textContent does the same as innerText, but will return the FULL text of a node
  - innerHTML allows to display and set the text and the HTML elements inside of the current HTML element we're referencing
*/

//! 3: ADDEVENTLISTENER - click
let btn = document.getElementById('click-this');

console.log(btn);

// btn.addEventListener('click', event => {
//   event.target.style.backgroundColor = 'blue';
//   event.target.innerText = "Clicked!";
//   console.dir(btn);
// });

/* 
! CHALLENGE
* ***********
    - Create a variable that holds the button element (may need to comment out the above code)
    - Using that variable, make the button toggle between red and blue when clicked.
*/

btn.addEventListener('click', event => {
  if (event.target.style.backgroundColor != "skyblue") {
    event.target.style.backgroundColor = "skyblue";
    event.target.innerText = "I'm blue!";
  } else {
    event.target.style.backgroundColor = "red";
    event.target.innerText = "I'm red!";
  }
});

//! ADDEVENTLISTENER - keyup

let input = document.getElementById('nameInput');

input.addEventListener('keyup', e => {
  console.log(e.target.value);
  // console.log(document.getElementsByTagName('p'));
  let pTags = document.getElementsByTagName('p');
  pTags[0].innerText = 'Something Changed!';

  if (e.target.value == '') {
    pTags[1].innerText = "Nothing has been typed...";
  } else {
    pTags[1].innerText = `Everyone, say hello to ${e.target.value}`;
  }
});

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2, 3, 4));