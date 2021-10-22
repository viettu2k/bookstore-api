const express = require("express");
const router = express.Router();

const { create, categoryById, read } = require("../controllers/category");
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

router.param("userId", userById);
router.param("categoryId", categoryById);

module.exports = router;