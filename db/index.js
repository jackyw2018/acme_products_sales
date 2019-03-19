const db = require('./db');
const { Product } = require('./models');

const syncAndSeed = () => {
  return db.sync({ force: true }).then(() => {
    return Promise.all([
      Product.create({
        name: 'Bar',
        price: 8,
        discount: 0,
        availability: 'In Stock',
      }),
      Product.create({
        name: 'Bazz',
        price: 4,
        discount: 0,
        availability: 'Backordered',
      }),
      Product.create({
        name: 'Quq',
        price: 2,
        discount: 0,
        availability: 'Discontinued',
      }),
      Product.create({
        name: 'prof',
        price: 1.3,
        discount: 5,
        availability: 'In Stock',
      }),
      Product.create({
        name: 'test',
        price: 1,
        discount: 50,
        availability: 'In Stock',
      }),
    ]);
  });
};

module.exports = {
  db,
  Product,
  syncAndSeed,
};
