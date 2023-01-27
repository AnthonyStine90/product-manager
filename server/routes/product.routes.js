const express = require("express");
const productRouter = express.Router();

const {
  createProduct,
  findAllProducts,
  findOneProduct, 
  updateOneProduct, 
  deleteOneProduct,
} = require('../controllers/product.controller');

productRouter
  .route('/')
  .get(findAllProducts)
  .post(createProduct);

productRouter
  .route('/:id')
  .get(findOneProduct)
  .put(updateOneProduct)
  .delete(deleteOneProduct);

module.exports = productRouter;