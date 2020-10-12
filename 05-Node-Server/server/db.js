const Sequelize = require('sequelize');

const sequelize = new Sequelize('workoutlog', 'postgres', 'GiveMeSecurity12', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate().then(
  () => {
    console.log('Connected to workoutlog postgres database');
  },
  err => {
    console.log(err);
  }
);

module.exports = sequelize;