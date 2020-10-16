const { Router } = require('express');
const bcrypt = require('bcrypt');

const { user } = require('../models/index');

const UsersControllerRouter = Router();

// * CRUD-DY CODE FOR USERS
//? C - Create a user by registration   (url): "/register"
//? R - Read the user profile           (url): "/profile", "/login"
//? U - Update user information         (url): "/update"
//? D - Delete the user                 (url): "/exterminate"

// * Kinds of requests
// POST - Create new info, insert info into db, sends information
// GET - Retrieve information, or pull information from the database (give me an HTML doc)
// PUT - Modify existing information
// DELETE - Exterminate data from the db

UsersControllerRouter.post('/register', (request, response) => {
  // PROCESS:
  // Retrieve the data from the body of the request
  // !!!!! Use that data to craft a USER
  // !!!!! Save the USER to the db
  // Respond with the status of the action

  let { email, password } = request.body;

  let newUser = user.build({
      email: email,
      password: bcrypt.hashSync(password, 12),
    })
  
  newUser.save()
    .then(() => {
      console.log('[server]: New user created');
      response.json({
        message: 'User successfully created!'
      });
    })
    .catch(error => {
      console.log(error);
      response.status(500).json({
        message: 'Failed to create user'
      });
    });
});

UsersControllerRouter.post('/login', (request, response) => {
  // PROCESS:
  // Retrieve the data from the body of the request
  // Verify the user exists and the data matches what is in the record
  // If so: respond with a token
  // If not: respond with "Get off my lawn"

  response.json({
    message: "Hello from the user Login route!"
  })
} )

// TODO: Implement the following routes: "/profile", "/update", & "/exterminate"

module.exports = UsersControllerRouter;