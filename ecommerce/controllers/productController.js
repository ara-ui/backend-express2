const path = require("path");
const productService = require("../services/productService");

const {
    sendResponse,
    sendErrorResponse
} = require("../utils/response");

// GET /api/products
const getAllProducts = (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "..", "view", "product.html"));
    } catch (err) {
        return sendErrorResponse(res, {
            message: err.message,
            statusCode: 500
        });
    }
};

// GET /api/products/:id
const getProductById = (req, res) => {
    try {

        const product = productService.getProductById(req.params.id);

        return sendResponse(res, product, 200);

    } catch (err) {

        return sendErrorResponse(res, {
            message: err.message,
            statusCode: 404
        });

    }
};

// POST /api/products
const addProduct = (req, res) => {
    try {

        console.log(req.body);

        return sendResponse(
            res,
            { value: req.body.productName },
            201
        );

    } catch (err) {

        return sendErrorResponse(res, {
            message: err.message,
            statusCode: 500
        });

    }
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
};