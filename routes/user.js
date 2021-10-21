const express = require("express");
const router = express.Router();

const { requireSignin } = require("../controllers/auth");
const { userById, read } = require("../controllers/user");

router.get("/users/:userId", requireSignin, read);

router.param("userId", userById);

module.exports = router;