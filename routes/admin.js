const express = require("express");
const router = express.Router();

// Controller
const {
  addNewProduct,
  renderFormProduct,
  listProduct,
  deleteProduct,
} = require("../controllers/product");

// Function Add product
router.post("/product", addNewProduct);

// List Product
router.get("/list-product", listProduct);

// Add Product
router.use("/add-product", renderFormProduct);

// Delete
router.post("/delete", deleteProduct);

exports.routes = router;
