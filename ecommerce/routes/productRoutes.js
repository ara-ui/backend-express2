const express = require("express");

const router = express.Router();

const {
    getAllProducts, addProduct, getProductById
}= require("../controllers/productController");

// GET /products
router.get("/", getAllProducts);

// POST /products
router.post("/", addProduct);

// GET /products/:id
router.get("/:id", getProductById);

module.exports = router;