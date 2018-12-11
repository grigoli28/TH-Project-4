const { Router } = require("express");
const PRODUCTS = require("../../db/products.json");

// Unique id generator based on timestamp
const uuidv1 = require("uuid/v1");

const router = new Router();

// @route   GET api/products[?filter | ?search]
// @desc    Get all/filtered/searched products
// @access  Public
// TODO middlewares
router.get("/", filterMiddleware, searchMiddleware, (req, res) => {
  res.json(PRODUCTS);
});

// @route   GET api/products/:id
// @desc    Get product
// @access  Public
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = findOneById(id, PRODUCTS);
  if (!product) return res.status(404).send("No such product");
  res.json(product);
});

// @route   POST api/products
// @desc    Add new product
// @access  Public
router.post("/", (req, res) => {
  const newProduct = {
    id: uuidv1(),
    name: req.body.name,
    price: req.body.price,
    size: req.body.size,
    category: req.body.category,
    brand: req.body.brand,
  };
  PRODUCTS.push(newProduct);
  res.json(newProduct);
});

// @route   DELETE api/products/:id
// @desc    Remove product
// @access  Public
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const removedProduct = findOneByIdAndRemove(id, PRODUCTS);
  if (!removedProduct) return res.status(404).send("No such product to remove");

  res.json({ removed: true, ...removedProduct });
});

// @route   PUT api/products/:id
// @desc    Update product
// @access  Public
router.put("/:id", (req, res) => {
  res.send("Test");
});

function findOneById(id, array) {
  return array.find(item => item.id == id);
}

function findOneByIdAndRemove(id, array) {
  const index = array.findIndex(item => item.id == id);
  // If no such item
  if (index < 0) return null;

  return array.splice(index, 1)[0];
}

function filterMiddleware(req, res, next) {
  next();
}

function searchMiddleware(req, res, next) {
  next();
}

module.exports = router;
