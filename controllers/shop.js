const Product = require("../models/product");

exports.renderShop = (req, res, next) => {
  // const product = new Product();
  const getDataProduct = Product.fetchAll();

  res.render("shop", {
    pageTitle: "Shop",
    prods: getDataProduct,
    path: "/",
  });
};
