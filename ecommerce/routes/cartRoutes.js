
const express = require("express");

const router = express.Router();
const {
    getCartForUser,
    addProductToCart
} = require("../controllers/cartController");


// GET /cart/:userId
router.get("/:userId", getCartForUser);

// POST /cart/:userId
router.post("/:userId", addProductToCart);

module.exports = router;