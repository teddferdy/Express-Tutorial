const express = require("express");

const path = require("path");

const router = express.Router();

const rootDir = require("../utils/path");

router.use("/product", (req, res, next) => {
  console.log("req.body =>", req.body);
  res.redirect("/");
});

router.use("/add-product", (req, res, next) => {
  //   res.send(`
  //     <form action="/admin/product" method="POST">
  //       <input type="text" name="title" placeholder="Product Title" />
  //       <button type="submit">Add Product</button>
  //     </form>
  //   `);

  res.sendFile(path.join(rootDir, "/views/admin.html"));
});

module.exports = router;
