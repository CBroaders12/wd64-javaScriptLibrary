import React from 'react';
import { Container } from 'reactstrap';

const NytResults = (props) => {
  return(
    <Container>
      {props.results.map(result => {
        return(
          <Container key={result._id} fluid={true}>
            <h2>{result.headline.main}</h2>
            {result.multimedia.length > 1 ? <Container fluid="xs"><img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /></Container> : ''}
            <p>
              {result.snippet}
              <br/>
              {result.keywords.length > 0 ? ' Keywords: ' : ''}
            </p>
            <ul>
              {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
            </ul>
            <a href={result.web_url}><button>Read It</button></a>
          </Container>
        )
      })}
      <div>
        <button onClick={e => props.changePage(e, "down")} >Previous 10</button>
        <button onClick={e => props.changePage(e, "up")} >Next 10</button>
      </div>
    </Container>
  );
};

export default NytResults;