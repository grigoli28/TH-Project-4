const { Router } = require("express");
const CUSTOMERS = require("../../db/customers.json");
const PRODUCTS = require("../../db/products.json");
const { encrypt, passwordsMatch } = require("../../util/password");
const populateObject = require("../../util/populateObject");

const {
  findOneByUsername,
  findOneById,
  findOneByIdAndRemove,
} = require("../../util/arrayLookup");

// Unique id generator based on timestamp
const uuidv1 = require("uuid/v1");

const router = new Router();

// @route   GET api/customers
// @desc    Get all customers
// @access  Private (only admin)
router.get("/", (req, res) => {
  const populated = CUSTOMERS.filter(customer => !customer.isAdmin).map(
    customer => populateObject(customer, "id name email balance username")
  );
  res.json(populated);
});

// @route   GET api/customers/:id
// @desc    Get single customer
// @access  Private (only admin)
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ user: "No user with given id" });

  // Get only certain details of customer
  const populated = populateObject(
    customer,
    "name username email balance birthdate shoppingCart purchasedProducts"
  );
  res.json(populated);
});

// @route   GET api/customers/:id/cart
router.get("/:id/cart", (req, res) => {
  const { id } = req.params;
  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No Such Customer!" });

  const cart = customer.shoppingCart;
  let cartItems = [];

  for (let { id } of cart) {
    cartItems.push(findOneById(id, PRODUCTS));
  }

  res.json(cartItems);
});

// @route   POST api/customers/:id/cart
router.post("/:id/cart", (req, res) => {
  const customerId = req.params.id;

  const customer = findOneById(customerId, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No Such Customer!" });

  // Product id
  const { id } = req.body;
  const { shoppingCart } = customer;
  shoppingCart.push({ id });

  res.json(shoppingCart);
});

// @route   DELETE api/customers/:id/cart/:prod_id
router.delete("/:id/cart/:prodId", (req, res) => {
  const { id, prodId } = req.params;

  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No Such Customer!" });

  const removedProd = findOneByIdAndRemove(prodId, customer.shoppingCart);
  if (!removedProd)
    return res.status(404).json({ product: "No such product in cart" });

  res.json(removedProd);
});

// @route   GET api/customers/:id/purchased
router.get("/:id/purchased", (req, res) => {
  const { id } = req.params;
  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No Such Customer!" });

  const purchased = customer.purchasedProducts;
  let purchasedItems = [];

  for (let { id } of purchased) {
    purchasedItems.push(findOneById(id, PRODUCTS));
  }

  res.json(purchasedItems);
});

// @route   POST api/customers/:id/purchased
router.post("/:id/purchased", (req, res) => {
  const customerId = req.params.id;
  const customer = findOneById(customerId, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No Such Customer!" });

  const { id } = req.body;
  const { purchasedProducts } = customer;
  purchasedProducts.push({ id });

  res.json(purchasedProducts);
});

// @route   DELETE api/customers/:id/purchased/:prod_id
router.delete("/:id/purchased/:prodId", (req, res) => {
  const { id, prodId } = req.params;
  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).json({ customer: "No Such Customer!" });

  const { purchasedProducts } = customer;
  const removedProd = findOneByIdAndRemove(prodId, purchasedProducts);
  if (!removedProd)
    return res.status(404).json({ product: "No such product in cart" });

  res.json(removedProd);
});

// @route   POST api/customers
// @desc    Add new customer
// @access  Public
router.post("/", (req, res) => {
  if (req.body.password !== req.body.password2)
    return res.status(404).json({ password: "Passwords do not match!" });

  const newCustomer = {
    id: uuidv1(),
    name: req.body.name,
    email: req.body.email,
    balance: req.body.balance,
    birthdate: req.body.birthdate,
    username: req.body.username,
    password: encrypt(req.body.password),
    shoppingCart: [],
    purchasedProducts: [],
  };
  CUSTOMERS.push(newCustomer);

  // Get only certain details of customer
  const populated = populateObject(newCustomer, "id name");
  res.json(populated);
});

// @route   DELETE api/customers/:id
// @desc    Remove customer
// @access  Private (only admin and customer)
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const removedCustomer = findOneByIdAndRemove(id, CUSTOMERS);
  if (!removedCustomer)
    return res.status(404).json({ customer: "No customer with given id" });

  res.json({ removed: true, name: removedCustomer.name });
});

// @route   POST api/customers/login
// @desc    Customer login
// @access  Public
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = findOneByUsername(username, CUSTOMERS);
  if (!user || !passwordsMatch(password, user.password))
    return res.status(404).json({ login: "Username or Password Incorrect" });

  const populated = populateObject(user, "id name isAdmin");

  res.json({ ...populated });
});

// @route   PUT api/customers/:id
// @desc    Update customer
// @access  Private (only admin)
router.put("/:id", (req, res) => {
  // TODO
  res.send("Test");
});

module.exports = router;
