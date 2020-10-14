const Sequelize = require('sequelize');

const applicationSequelizeObject = new Sequelize(
  'tododb',
  'conorbroaders',
  'GiveMeSecurity12',
  {
  host: 'localhost',
  dialect: 'postgres'
  }
);

module.exports = applicationSequelizeObject;