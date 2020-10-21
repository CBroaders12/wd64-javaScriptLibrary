import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import NavbarComponent from "./components/Navbar";
import LoginComponent from './components/Login';

function App() {

  const [ authenticationJWT, changeAuthJWT ] = useState('');

  // TODO: Load up the auth token if it is stored locally (on startup)

  const authenticateUser = (token) => {
    window.localStorage.setItem("authToken", token)
    changeAuthJWT(token);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent/>
        <Switch>
          <Route path="/login">
            <LoginComponent authenticateUser={authenticateUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
