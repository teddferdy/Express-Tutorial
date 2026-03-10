const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");

const router = express.Router();

// Import Data Admin / Routes Admin
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const productData = adminData.product;
  res.render("shop", {
    docTitle: "Shop",
    product: productData,
    path: "/",
  });
});

exports.routes = router;
