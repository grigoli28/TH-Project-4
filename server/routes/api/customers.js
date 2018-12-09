const express = require("express");
const { Router } = express;

const router = new Router();

// @route   GET api/customers/test
// @desc    Tests customer route
// @access  Public
router.get("/test", (req, res) => {
  res.send("Customers Test");
});

module.exports = router;
