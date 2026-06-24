const express = require("express");

const router = express.Router();

const {
    getAllUsers, addUser, getUserById
}=require("../controllers/userController");



// GET /users
router.get("/", getAllUsers);

// POST /users
router.post("/", addUser);

// GET /users/:id
router.get("/:id",getUserById);

module.exports = router;