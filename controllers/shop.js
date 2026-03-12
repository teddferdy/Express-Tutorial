const Product = require("../models/product");

exports.renderShop = (req, res, next) => {
  Product.fetchAll((data) => {
    return res.render("shop", {
      pageTitle: "Shop",
      prods: data || [],
      path: "/",
    });
  });
};
