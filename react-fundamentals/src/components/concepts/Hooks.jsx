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
        .then(response => response.text())
        .then(json => {
          setResults(json);
          console.log(json);
        })
    }
  }, [queryNum])

  return [results, queryNum, setQueryNum];
}

const useNumTitleHook = (num) => {
  const [ numClicks, setNumClicks ] = useState(num);

  useEffect(() => {
    if(numClicks !== 0) {
      document.title = `You have clicked ${numClicks} times`
    }
  }, [numClicks])

  return [ numClicks, setNumClicks ];
}

const Hooks2 = () => {
  const [ results, queryNum, setQueryNum ] = useNumHook('');
  const [ numClicks, setNumClicks ] = useNumTitleHook(0);
  
  return(
    <div className="main">
      <div className="mainDiv">
        <h3>Enter a number below to see a number fact</h3>
        <input value={queryNum} onChange={e => setQueryNum(e.target.value)} placeholder="enter a number" />
        {results ? <h2>{results}</h2> : <div></div>}
        <button onClick={() => setNumClicks(numClicks + 1)}>Click me to update the Document Title</button>
      </div>
    </div>
  );
};



export default Hooks2;



