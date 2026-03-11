const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Set View Engine
app.set("view engine", "ejs");
app.set("views", "views");

// Error Controller
const { ErrorController } = require("./controllers/404");

// Routes
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorRoutes = require("./routes/404");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Main
app.use("/admin", adminData.routes);
app.use(shopRoutes.routes);

// Error Routes
app.use(ErrorController);

app.listen(3000);
