const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-data', 'root', '98127634$Sql', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
