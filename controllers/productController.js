const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

// Get all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

// Get a single product
const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    res.status(404).json({ message: `Product not found with ID ${id}` });
    return;
  }
  res.status(200).json(product);
});

// Create a product
const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

// Update a product
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if (!product) {
    res.status(404).json({ message: `Product not found with ID ${id}` });
    return;
  }
  res.status(200).json(product);
});

// Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    res.status(404).json({ message: `Product not found with ID ${id}` });
    return;
  }
  res.status(200).json(product);
});

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
