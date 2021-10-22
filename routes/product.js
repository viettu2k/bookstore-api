const express = require("express");
const router = express.Router();

const { create } = require("../controllers/product");
const { requireSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.post("/products/create/:userId", requireSignin, isAuth, create);

router.param("userId", userById);

module.exports = router;