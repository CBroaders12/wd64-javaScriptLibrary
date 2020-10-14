//  Purpose
// Crud for LISTS
// Crud for ITEMS
// Crud for USERS

// index.js is the collection point for all controllers
// index.js is the outlet point for all controllers

// Current Goal: Test Controller

const TestController = require('./TestController');
const UsersController = require('./UsersController');
const ListsController = require('./ListsController');
const ItemsController = require('./ItemsController');

module.exports = {
  test: TestController,
  users: UsersController
};