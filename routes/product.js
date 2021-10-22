const express = require("express");
const router = express.Router();

const { create, productById, read, remove } = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/products/:productId", read);
router.post("/products/create/:userId", requireSignin, isAuth, isAdmin, create);
router.delete(
    "/products/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;