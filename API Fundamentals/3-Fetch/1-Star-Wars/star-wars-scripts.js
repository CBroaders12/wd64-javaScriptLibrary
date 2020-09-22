let starWarsPeopleList = document.getElementById('people');
let starWarsPlanetList = document.getElementById('planets');

fetch('https://swapi.dev/api/people')
  .then(response => {
    return response.json();
  })
  .then(json => {
    let people = json.results;

    for (p of people) {
      let listItem = document.createElement('li');
      listItem.innerHTML = `<p> ${p.name} </p>`
      starWarsPeopleList.appendChild(listItem);
    }
  });

fetch('https://swapi.dev/api/planets')
  .then(response => {
    return response.json();
  })
  .then(json => {
    let planets = json.results;

    for (p of planets) {
      let listItem = document.createElement('li');
      listItem.innerHTML = `<p> ${p.name} </p>`
      starWarsPlanetList.appendChild(listItem);
    }
  })