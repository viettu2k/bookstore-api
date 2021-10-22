const express = require("express");
const router = express.Router();

const { create, productById, read } = require("../controllers/product");
const { requireSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/products/:productId", read);
router.post("/products/create/:userId", requireSignin, isAuth, create);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;