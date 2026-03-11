const express = require("express");
const router = express.Router();

// Controller
const { addNewProduct, renderFormProduct } = require("../controllers/product");

router.use("/product", addNewProduct);
router.use("/add-product", renderFormProduct);

exports.routes = router;
