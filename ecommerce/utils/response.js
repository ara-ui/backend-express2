const sendErrorResponse = (res, err) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        status: false,
        message: message
    });
};

const sendResponse = (res, data, statusCode) => {

    return res.status(statusCode).json({
        status: true,
        data: data
    });
};

module.exports = {
    sendErrorResponse,
    sendResponse
};