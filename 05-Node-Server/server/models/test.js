const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const TestModel = sequelize.define('test', {
  testdata: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = TestModel;