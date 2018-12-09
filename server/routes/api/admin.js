const express = require("express");
const { Router } = express;

const router = new Router();

// @route   GET api/admin/test
// @desc    Tests admin route
// @access  Public
router.get("/test", (req, res ) => {
    res.send("Admin Test")
});

module.exports = router;
