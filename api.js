const router = require('express').Router();
const { Product } = require('./db');

router.get('/products', (req, res, next) => {
  Product.findAll()
    .then(products => res.json(products))
    .catch(next);
});

router.post('/products', (req, res, next) => {
  console.log(req.body);
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(next);
});

router.delete('/products/:productId', (req, res, next) => {
  const { productId } = req.params;
  Product.findByPk(productId)
    .then(product => product.destroy())
    .then(() => res.send(204).end())
    .catch(next);
});

module.exports = router;
