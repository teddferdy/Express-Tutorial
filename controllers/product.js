const Products = require("../models/product");

exports.addNewProduct = (req, res, next) => {
  const body = {
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    description: req.body.description,
  };

  const product = new Products(body);
  product.save();

  res.redirect("/");
};

// List Product
exports.listProduct = (req, res, next) => {
  Products.fetchAll((product) => {
    res.render("admin/product", {
      pageTitle: "Admin List Product",
      prods: product || [],
      path: "/admin/list-product",
    });
  });
};

// Delete
exports.deleteProduct = (req, res, next) => {
  const titleProduct = req.body.title;

  Products.deleteDataByName(titleProduct);
  res.redirect("/");
};

exports.renderFormProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};
