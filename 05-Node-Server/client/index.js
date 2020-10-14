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