import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import NavbarComponent from './components/Navbar';
import LoginComponent from './components/Login';
import RegisterComponent from './components/Register';
import ListsComponent from './components/Lists';

function App() {

  const [ authenticationJWT, changeAuthJWT ] = useState('');

  useEffect(() => {
    if(window.localStorage.getItem('authToken')) {
      changeAuthJWT(window.localStorage.getItem('authToken'));
    }
  }, [])
  
  /*
    ! USEEFFECT NOTES:
??? 1) Without array will fire each time the component is rendered to the screen ???
    2) With empty array, it will only fire when the component is first MOUNTED to the screen
    3) If you include a dependency in the array, it will fire when that dependency is updated
  */

  const authenticateUser = (token) => {
    window.localStorage.setItem("authToken", token)
    changeAuthJWT(token);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent isLoggedIn={authenticationJWT}  />
        <Switch>
          <Route exact path="/login">
            <LoginComponent authenticateUser={authenticateUser} />
          </Route>
          <Route exact path="/register">
            <RegisterComponent authenticateUser={authenticateUser} />
          </Route>
          <Route exact path="/mylists">
            <ListsComponent userToken={authenticationJWT} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
