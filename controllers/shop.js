const controllerProduct = require("./product");

exports.renderShop = (req, res, next) => {
  const productData = controllerProduct.products;

  res.render("shop", {
    pageTitle: "Shop",
    prods: productData,
    path: "/",
  });
};
