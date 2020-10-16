function fetchHelloDataFromAPI() {
  fetch("http://localhost:3000/test/helloclient", {
    method: "GET",
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => {
    console.log("Fetch response:", response);
    return response.text();
  })
  .then(text => {
    console.log(text);
  })
}

/************************
 * ! 2 POST long hand: /one
************************/
function postToOne() {
  let url = 'http://localhost:3000/test/one';

  fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(
    response => {
      return response.text();
    }
  )
  .catch(
    error => {
      console.log('Error:', error);
    }
  )
  .then(
    response => {
      console.log('Success:', response);
    }
  )
}

/************************
 * ! 3 POST /one: Arrow Function
************************/

function postToOneArrow() {
  let url = 'http://localhost:3000/test/one';

  fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(res => res.text())
  .catch(error => console.log('Error:', error))
  .then(response => console.log('Success:', response));
}

/************************
 * ! 4 POST data
************************/

function postData() {
  let content = { testdata: { item: 'This was saved!' } };

  let testDataAfterFetch = document.getElementById('test-data');
  let createdAfterFetch = document.getElementById('created-at');

  fetch('http://localhost:3000/test/seven', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  })
  .then(response => response.json())
  .then(text => {
    console.log(text);
    testDataAfterFetch.innerHTML = text.testdata.testdata;
    createdAfterFetch.innerHTML = text.testdata.createdAt;
  });
}

/**********************************
 * ! 5 GET FROM /ONE: Display Data
***********************************/
function fetchFromOneDisplayData() {
  let url = 'http://localhost:3000/test/one';
  let dataView = document.getElementById('display-one');

  fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then( response => response.json() )
  .catch( error => console.log('Error:', error) )
  .then(
    results => {
      let myList = document.querySelector('#getjson');

      for(r of results) {
        console.log('Response:', r.testdata);
        let listItem = document.createElement('li');
        listItem.innerHTML = r.testdata;
        myList.appendChild(listItem);
      }
    }
  )
}