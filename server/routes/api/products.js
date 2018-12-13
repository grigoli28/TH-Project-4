const { Router } = require("express");
const PRODUCTS = require("../../db/products.json");

const {
  findOneById,
  findOneByIdAndRemove,
} = require("../../util/arrayLookup");

// Unique id generator based on timestamp
const uuidv1 = require("uuid/v1");

const router = new Router();

// @route   GET api/products[?filter | ?search]
// @desc    Get all/filtered/searched products
// @access  Public
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
  // TODO
  res.send("Test");
});

function filterMiddleware(req, res, next) {
  if (!req.query.filter) return next();

  // Filter products and send it
  const { filter, value } = req.query;
  const filteredProducts = PRODUCTS.filter(
    prod => Number(prod[filter]) <= Number(value)
  );

  res.json(filteredProducts);
}

function searchMiddleware(req, res, next) {
  if (!req.query.search) return next();

  // Search products
  const { search } = req.query;
  const value = "name";
  const searchedProducts = PRODUCTS.filter(prod =>
    prod[value].includes(search)
  );

  res.json(searchedProducts);
}

module.exports = router;
