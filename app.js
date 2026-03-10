const express = require("express");
const boydParser = require("body-parser");

// Path
const path = require("path");

// Import Routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// PUG
app.set("view engine", "pug");
app.set("views", "views");

app.use(boydParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/admin", adminRoutes.routes);
app.use(shopRoutes.routes);

// Error Routes
app.use((req, res, next) => {
  // res.status(404).send("<h1>Page Not Found</h1>");

  // res.status(404).sendFile(path.join(__dirname, "./views/404.html"));

  res.status(404).render("404", {
    pageTitle: "404 Not Found!",
  });
});

// Server
app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
