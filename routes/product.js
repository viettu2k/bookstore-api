const express = require("express");
const router = express.Router();

const {
    create,
    productById,
    read,
    remove,
    update,
    list,
} = require("../controllers/product");
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
router.put(
    "/products/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);
router.get("/products", list);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;