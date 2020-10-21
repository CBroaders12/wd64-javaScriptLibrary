import React, { useState } from "react";

const State = () => {



  return(
    <div className="main">
      <div className="mainDiv">
        <dl>
          <dt>useState is unique to functional components</dt>
          <dd>Class componenets hace a separate means of using and changing state,</dd>
          <dt>useState Uses Array Destructuring</dt>
          <dd>useState provides a state variable and a setState function.</dd>
          <dt>useState is a hook</dt>
          <dd>useState is a hook baked into React.</dd>
          <dt>Triggers Re-renders</dt>
          <dd>Like with props changes, changing the state of a component re-renders the whole component.</dd>
        </dl>

        <StateExample />
      </div>
    </div>
  );
};

const StateExample = () => {
  const [text, setText] = useState('inital value');
  const [likeNum, setLikeNum] = useState(0);
  const [textColor, setTextColor] = useState("blue");
  const [fontWeight, setFontWeight] = useState("normal")

  return(
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <br/>
      <img 
      style={{width: '100px', height: '100px'}}
      src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png" alt="Like" onClick={e => setLikeNum(likeNum + 1)} />
      <span>{likeNum}</span>
      <br/>
      <br/>
      <p
      style={{color: textColor, fontWeight: fontWeight}}
      onMouseEnter={e => {setTextColor('red'); setFontWeight("bold")}}
      onMouseLeave={e => {setTextColor('blue'); setFontWeight("normal")}}
      >This text should be able to change colors.</p>
    </div>
  );
};

export default State;