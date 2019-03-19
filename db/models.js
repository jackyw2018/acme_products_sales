const db = require('./db');
const Sequelize = require('sequelize');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.FLOAT(10, 2),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  discount: {
    type: Sequelize.FLOAT(4, 2),
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
    },
  },
  availability: {
    type: Sequelize.ENUM('In Stock', 'Backordered', 'Discontinued'),
    validate: {
      notEmpty: false,
    },
  },
});

module.exports = {
  Product,
};
