require("dotenv").config();

const express = require("express");
const app = express();


const { engine } = require("express-handlebars");
const morgan = require("morgan");

const path = require("path");
const routes = require("./routes/index.route");

app.use(morgan("dev"));
app.engine("handlebars", engine());
app.set("views", __dirname + "/../views");
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.get("/", (req, res) => {
  res.redirect("/products");
});

module.exports = app;
