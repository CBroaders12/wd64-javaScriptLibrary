import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

import "../styles/Register.css"

const RegisterComponent = (props) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirm, setPasswordConfirm ] = useState('');

  const triggerEmailInputChange = event => setEmail(event.target.value);
  const triggerPasswordInputChange = event => setPassword(event.target.value);
  const triggerPasswordConfirmInputChange = event => setPasswordConfirm(event.target.value);

  // Challenge: Create the submit event function that POSTS to the registration route
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    
    if(password === passwordConfirm) {
      fetch("http://localhost:8080/user/register", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(response => response.json())
      .then(() => {
        console.log("user is registered");
        console.log("logging in...")
        fetch("http://localhost:8080/user/login", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        })
        .then(response => response.json())
        .then(data => {
          props.authenticateUser(data.token);
          console.log(data.token);
        })
        .catch(error => console.log(error))
      })
      .catch(error => console.log(error));
    } else {
      // TODO: Tooltip instead of alert
      alert('Passwords MUST match!');
    }
  }

  return(
      <Form onSubmit={handleRegisterSubmit} className="authForm" id="registerForm" >
        <h2>Register</h2>
        <FormGroup>
          <Label for="registerEmail">Email:</Label>
          <Input type="email" name="registerEmail" id="registerEmail" value={email} onChange={triggerEmailInputChange} placeholder="example@email.com" required />
        </FormGroup>
        <FormGroup>
          <Label for="registerPassword">Password:</Label>
          <Input type="password" name="registerPassword" id="registerPassword" value={password} onChange={triggerPasswordInputChange} placeholder="**********" required />
        </FormGroup>
        <FormGroup>
          <Label for="registerPasswordConfirm">Confirm Password:</Label>
          <Input type="password" name="registerPasswordConfirm" id="registerPasswordConfirm" value={passwordConfirm} onChange={triggerPasswordConfirmInputChange} placeholder="**********" required />
        </FormGroup>
        <Button>Register</Button>
      </Form>
  );
};

export default RegisterComponent;