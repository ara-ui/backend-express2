const {
    sendResponse,
    sendErrorResponse
} = require("../utils/response");

const getAllUsers = (req, res) => {
    try {

        return sendResponse(res, "Fetching all users", 200);

    } catch (err) {

        return sendErrorResponse(res, {
            message: err.message,
            statusCode: 500
        });

    }
};

const addUser = (req, res) => {
    try {

        return sendResponse(res, "Adding a new user", 201);

    } catch (err) {

        return sendErrorResponse(res, {
            message: err.message,
            statusCode: 500
        });

    }
};

const getUserById = (req, res) => {
    try {

        const message = `Fetching user with ID: ${req.params.id}`;

        return sendResponse(res, message, 200);
        
    } catch (err) {

        return sendErrorResponse(res, {
            message: err.message,
            statusCode: 500
        });

    }
};

module.exports = {
    getAllUsers,
    addUser,
    getUserById
};