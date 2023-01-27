const Product = require("../models/product.model");

// create a product
const createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => res.status(201).json(product))
    .catch((err) => res.status(400).json(err));
};

// get all products
const findAllProducts = (req, res) => {
  Product.find()
    .then((product) => res.status(201).json(product))
    .catch((err) => res.status(400).json(err));
};

//find one product
const findOneProduct = (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((product) => res.status(201).json(product))
    .catch((err) => res.status(400).json(err));
};

//update one product
const updateOneProduct = (req, res) => {
  const { id } = req.params;
  Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    .then((product) => res.status(201).json(product))
    .catch((err) => res.status(400).json(err));
};

//delete product
const deleteOneProduct = (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id)
    .then((product) => res.status(201).json(product))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  createProduct,
  findAllProducts,
  findOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
