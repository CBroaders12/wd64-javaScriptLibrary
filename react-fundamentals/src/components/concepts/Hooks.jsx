import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [ query, setQuery ] = useState('')
  const [ results, setResults ] = useState([])

  const fetcher = () => {
    fetch(`https://swapi.dev/api/people/${query}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setResults(json);
      });
  };

  return(
    <div className="main">
      <div className="mainDiv">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="enter your sw character number" />
        <button onClick={() => fetcher()}>Click for Character!</button>
        {results ? <h2>{results.name}</h2> : <div></div>}
      </div>
    </div>
  );
};

const useNumHook = (num) => {
  const [ queryNum, setQueryNum ] = useState(num);
  const [ results, setResults ] = useState('');

  useEffect(() => {
    if(queryNum !== '') {
      fetch(`http://numbersapi.com/${queryNum}`)
        .then(response => response.json())
        .then(json => {
          setResults(json);
          console.log(json);
        })
    }
  }, [queryNum])

  return [results, queryNum, setQueryNum];
}

export default Hooks;

