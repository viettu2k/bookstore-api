const express = require("express");
const router = express.Router();

const {
    create,
    categoryById,
    read,
    update,
    remove,
    list,
} = require("../controllers/category");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/categories/:categoryId", read);
router.post(
    "/categories/create/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    create
);
router.put(
    "/categories/:categoryId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);
router.delete(
    "/categories/:categoryId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);
router.get("/categories", list);

router.param("userId", userById);
router.param("categoryId", categoryById);

module.exports = router;