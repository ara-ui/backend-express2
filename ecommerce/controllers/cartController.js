const {
    sendResponse,
    sendErrorResponse
} = require("../utils/response");

const getCartForUser = (req, res) => {
    try {

        const message = `Fetching cart for user with ID: ${req.params.userId}`;

        return sendResponse(res, message, 200);

    } catch (err) {

        return sendErrorResponse(res, {
            message: err.message,
            statusCode: 500
        });

    }
};

const addProductToCart = (req, res) => {
    try {

        const message = `Adding product to cart for user with ID: ${req.params.userId}`;

        return sendResponse(res, message, 201);

    } catch (err) {

        return sendErrorResponse(res, {
            message: err.message,
            statusCode: 500
        });

    }
};

module.exports = {
    getCartForUser,
    addProductToCart
};