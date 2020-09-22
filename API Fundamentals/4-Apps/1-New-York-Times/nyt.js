const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '6IU77XWIwfaaqb0prYd7UFpQneJ3SYYu';
let url;

// SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date')
const endDate = document.querySelector('.endDate');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

//Hide nav bar before we search for anything
nav.style.display = 'none';

//Default values for pagination and display
let pageNumber = 0;
let displayNav = false;

//Define functions for event listeners
let fetchResults = e => {
  e.preventDefault();
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;

  //add optional dates
  if (startDate.value !== '') {
    console.log(startDate.value);
    url += `beginDate_date=${startDate.value}`;
  };

  if (endDate.value !== '') {
    url += `&end_date=${endDate.value}`
  }

  fetch(url)
    .then(result => {
      console.log(result);
      return result.json();
    })
    .then(json => {
      console.log(json);
    });
};

let nextPage = () => {
  console.log("Next button clicked");
};

let previousPage = () => {
  console.log("Previous button clicked");
}


//Add Event Listeners for search and page shifting
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

