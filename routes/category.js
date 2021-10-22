const express = require("express");
const router = express.Router();

const { create } = require("../controllers/category");

router.post("/categories/create", create);

module.exports = router;