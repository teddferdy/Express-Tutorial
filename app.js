const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Set View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Error Controller
const { ErrorController } = require("./controllers/404");

// Routes
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Main
app.use("/admin", adminData.routes);
app.use(shopRoutes.routes);

// Error Routes
app.use(ErrorController);

app.listen(3000);
