const Sequelize = require('sequelize');

const sequelize = new Sequelize('workoutlog', 'conorbroaders', 'GiveMeSecurity12', {
  host: 'localhost',
  dialect: 'postgres'
});

// const sequelize = new Sequelize('postgres://conorbroaders:GiveMeSecurity12@localhost:5432/workoutlog');

// sequelize.authenticate().then(() => console.log('DB Authed'));

module.exports = sequelize;