const express = require("express");
const { Router } = express;

const router = new Router();

// @route   GET api/admin/login
// @desc    Login for admin
// @access  Private
router.get("/login", (req, res) => {
  res.send("Admin Test");
});

module.exports = router;
