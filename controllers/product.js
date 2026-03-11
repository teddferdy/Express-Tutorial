const product = [];

exports.products = product;

exports.addNewProduct = (req, res, next) => {
  console.log("req.body =>", req.body);

  product.push({
    title: req.body.title,
  });

  res.redirect("/");
};

exports.renderFormProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};
