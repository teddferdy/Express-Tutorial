const Products = require("../models/product");

exports.addNewProduct = (req, res, next) => {
  console.log("req.body =>", req.body);

  const product = new Products(req.body.title);
  product.save();

  res.redirect("/");
};

exports.renderFormProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};
