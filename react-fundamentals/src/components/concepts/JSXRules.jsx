import React from "react";

const JSXRules = () => {
  return(
    <div className="main">
      <div className="mainDiv">
        <h1 className="sectionTitle">JSX</h1>
        <dl>
          <dt>Resembles HTML</dt>
          <dd>It's not. It's actually closer to JavaScript.</dd>
          <dt>React Elements</dt>
          <dd>Thesr are used to construct and update the DOM, or what you see on the screen.</dd>
          <dt>Not Required</dt>
          <dd>You can write in vanilla JS, but most people use JSX.</dd>
        </dl>
      </div>
      <div className="mainDiv">
        <NormalComponent />
        <CreateElementComponent />
      </div>
    </div>
  );
};

export default JSXRules;

const NormalComponent = () => {
  return(
    <div style={{ border: '2px solid black' }}>
      <h1>Normal Functional Component</h1>
      <p>This was contructed using JSX in the return.</p>
      <img src="https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg" alt=""/>
    </div>
  );
};

const CreateElementComponent = () => {
  return(
    React.createElement(
      'div',
      { style: { border: '2px solid black' } },
      [
        React.createElement('h1', null, "createElement() Component"),
        React.createElement('p', null, "This was contructed using createElement() calls."),
        React.createElement('img', { src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pubnub.com%2Fwp-content%2Fuploads%2F2014%2F10%2FReactJS.png&f=1&nofb=1" })
      ]
      )
  );
};