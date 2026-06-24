const path = require("path");
const productService = require("../services/productService");

// GET /api/products
const getAllProducts = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "view", "product.html"));
};

// GET /api/products/:id
const getProductById = (req, res) => {
    res.send(productService.getProductById(req.params.id));
};

// POST /api/products
const addProduct = (req, res) => {

    console.log(req.body);

    res.json({
        value: req.body.productName
    });

};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
};