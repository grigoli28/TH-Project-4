const { Router } = require("express");
const CUSTOMERS = require("../../db/customers.json");
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
  const populated = CUSTOMERS.map(customer =>
    populateObject(customer, "id name email username")
  );
  res.json(populated);
});

// @route   GET api/customers/:id (????? private or public or what)
// @desc    Get single customer
// @access  Private (only admin)
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const customer = findOneById(id, CUSTOMERS);
  if (!customer) return res.status(404).send("No such customer");

  // Get only certain details of customer
  const populated = populateObject(
    customer,
    "username email shoppingCart purchasedProducts"
  );
  res.json(populated);
});

// @route   POST api/customers
// @desc    Add new customer
// @access  Public
router.post("/", (req, res) => {
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
  const populated = populateObject(newCustomer, "password name email username");
  res.json(populated);
});

// @route   DELETE api/customers/:id
// @desc    Remove customer
// @access  Private (only admin and customer)
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const removedCustomer = findOneByIdAndRemove(id, CUSTOMERS);
  if (!removedCustomer)
    return res.status(404).send("No such customer to remove");

  res.json({ removed: true, name: removedCustomer.name });
});

// @route   POST api/customers/login
// @desc    Customer login
// @access  Public
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = findOneByUsername(username, CUSTOMERS);
  if (!user || !passwordsMatch(password, user.password))
    return res.status(404).send("Username or Password Incorrect!");

  res.json({ auth: true });
});

// @route   PUT api/customers/:id
// @desc    Update customer
// @access  Private (only admin)
router.put("/:id", (req, res) => {
  res.send("Test");
});

module.exports = router;
