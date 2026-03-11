const express = require("express");
const router = express.Router();

// Controller
const { renderShop } = require("../controllers/shop");

router.get("/", renderShop);

exports.routes = router;
