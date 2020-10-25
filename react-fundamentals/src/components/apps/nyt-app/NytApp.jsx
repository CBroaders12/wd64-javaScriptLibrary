import React, { useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import NytResults from './NytResults';

const baseURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
const apiKey = `6IU77XWIwfaaqb0prYd7UFpQneJ3SYYu`;

const NytApp = () => {
  const [ search, setSearch ] = useState('');
  const [ startDate, setStartDate ] = useState('');
  const [ endDate, setEndDate ] = useState('');
  const [ pageNumber, setPageNumber ] = useState(0);
  const [ results, setResults ] = useState([]);

  const fetchResults = () => {
    let url = `${baseURL}?api-key=${apiKey}&page=${pageNumber}&q=${search}`;
    url = startDate ? url + `&begin_date=${startDate}` : url;
    url = endDate ? url + `& end_date=${endDate}` : url;

    fetch(url)
      .then(response => response.json())
      .then(json => setResults(json.response.docs))
      .catch(error => console.log(error));
  };

  const handleSubmit = (event) => {
    setPageNumber(0);
    fetchResults();
    event.preventDefault();
  }

  const changePageNumber = (event, direction) => {
    event.preventDefault();
    if(direction === "down") {
      if (pageNumber > 0) {
        setPageNumber(pageNumber - 1);
        fetchResults();
      }
    }
    if(direction === "up") {
      setPageNumber(pageNumber + 1);
      fetchResults();
    }
  }

  return(
    <div className="main">
      <Container className="mainDiv">
        <Form onSubmit={handleSubmit}>
          <Row form>
            <Col md="8">
              <FormGroup>
                <Label for="search">Enter a single search term (required)</Label>
                <Input type="text" name="search" id="search" onChange={e => setSearch(e.target.value)} value={search} required />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md="4">
              <FormGroup>
                <Label for="startDate">Enter a start date: </Label>
                <Input type="text" name="startDate" id="startDate" pattern="[0-9]{8}" onChange={e => setStartDate(e.target.value)} value={startDate} />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="endDate">Enter an end date: </Label>
                <Input type="text" name="endDate" id="endDate" pattern="[0-9]{8}" onChange={ e => setEndDate(e.target.value) } value={endDate} />
              </FormGroup>
            </Col>
          </Row>
          <Button className="submit">Submit search</Button>
        </Form>
        { results.length > 0 ? <NytResults results={results} changePage={changePageNumber} /> : null}
      </Container>
    </div>
  );
};

export default NytApp;