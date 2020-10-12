let express = require('express');
let router = express.Router();

const contact = {
  user: 'CBroaders12',
  email: 'conor.broaders@gmail.com'
};

let projects = [
  'Project 1',
  'Project 2',
  'Project 3'
];

let myContacts = [
  {
    user: 'a',
    email: 'a@test.com'
  },
  {
    user: 'b',
    email: 'b@test.com'
  },
  {
    user: 'c',
    email: 'c@test.com'
  },
  {
    user: 'd',
    email: 'd@test.com'
  },
];

router.get('/', (req, res) => {
  res.send('Hey!!! This is a test route!');
});

router.get('/about', (req, res) => {
  res.send('Here is my about root. If you see this, you did it right. Huzzah!');
});

router.get('/contact', (req, res) => {
  res.send(contact);
});

router.get('/projects', (req, res) => {
  res.send(projects);
});

router.get('/mycontacts', (req, res) => {
  res.send(myContacts);
});

module.exports = router;