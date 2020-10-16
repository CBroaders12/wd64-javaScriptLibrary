const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const authTestModel = sequelize.define('authtestdata', {
  authtestdata: {
    type: DataTypes.STRING,
    allowNull: false
  },
  owner: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = authTestModel;