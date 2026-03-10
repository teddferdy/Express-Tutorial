const express = require("express");

const path = require("path");

const router = express.Router();

const rootDir = require("../utils/path");

// Store Data
const product = [];

router.use("/product", (req, res, next) => {
  console.log("req.body =>", req.body);
  product.push({
    title: req.body.title,
  });
  res.redirect("/");
});

router.use("/add-product", (req, res, next) => {
  //   res.send(`
  //     <form action="/admin/product" method="POST">
  //       <input type="text" name="title" placeholder="Product Title" />
  //       <button type="submit">Add Product</button>
  //     </form>
  //   `);

  // res.sendFile(path.join(rootDir, "/views/admin.html"));
  res.render("admin", {
    docTitle: "Add Product",
    path: "/admin/add-product",
  });
});

exports.routes = router;
exports.product = product;
