// const React = require('react');
import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Label, Input } from "reactstrap";

import "../styles/Login.css";

// TODO: Build functionality to send information to the API

const LoginComponent = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const triggerEmailInputChange = event => {
    setEmail(event.target.value);
  }

  const triggerPasswordInputChange = event => {
    setPassword(event.target.value);
  }

  const handleLoginSubmit = event => {
    event.preventDefault();
    // If both email and password are present
    // Send them off to the api to verify if it is a user
    // if response is OK, take the token from the response and call props.authenticateUser() with the token
    // if the response is not OK, display an error, but do nothing.
    if(email && password) {
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
        props.authenticateUser(data.token)
      })
      .catch(error => console.log(error))
    }
  }

  return(
    <Form className="authForm" id="loginForm" onSubmit={handleLoginSubmit}>
      <h3>Login</h3>
      <FormGroup>
        <Label htmlFor="loginEmail" sm={{size: 2}}>Email</Label>
        <Input onChange={triggerEmailInputChange} value={email} type="email" name="email" id="loginEmail" placeholder="example@email.com"></Input>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="loginPassword" sm={{size: 2}}>Password</Label>
        <Input onChange={triggerPasswordInputChange} value={password} type="password" name="password" id="loginPassword" placeholder="password"></Input>
      </FormGroup>
      <Button>Login</Button>
    </Form>
  );
};

// module.exports = LoginComponent;
export default LoginComponent;