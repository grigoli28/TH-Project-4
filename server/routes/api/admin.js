const express = require("express");
const { Router } = express;
const MESSAGES = require("../../db/messages.json");
const ADMIN = require("../../db/admin.json");
const { findOneById } = require("../../util/arrayLookup");
const { passwordsMatch } = require("../../util/password");

// Unique id generator based on timestamp
const uuidv1 = require("uuid/v1");

const router = new Router();

// @route   GET api/admin/messages
// @desc    Get all admin messages
// @access  Admin
router.get("/messages", (req, res) => {
  res.json(MESSAGES);
});

// @route   GET api/admin/messages/:id
// @desc    Get single message
// @access  Admin
router.get("/messages/:id", (req, res) => {
  const { id } = req.params;
  const message = findOneById(id, MESSAGES);
  if (!message) return res.status(404).send("No such message");

  res.json(message);
});

// @route   POST api/admin/messages
// @desc    Post new message for admin
// @access  Private
router.post("/messages", (req, res) => {
  const date = new Date();

  const newMessage = {
    id: uuidv1(),
    email: req.body.email,
    message: req.body.message,
    date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
  };
  MESSAGES.push(newMessage);

  res.json(newMessage);
});

// @route   POST api/admin/login
// @desc    Admin login
// @access  Admin
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    !(username === ADMIN.username) ||
    !passwordsMatch(password, ADMIN.password)
  )
    return res.status(404).send("Username or Password Incorrect!");

  res.json({ auth: true, isAdmin: true });
});

module.exports = router;
