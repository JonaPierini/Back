const { Router } = require("express");
const productsRoute = require("./product.route");
const chatRoute = require("./chat.route");
const cartRoute = require("./cart.route");

const routes = Router();

routes.use("/products", productsRoute);
routes.use("/chat", chatRoute);
routes.use("/cart", cartRoute);

module.exports = routes;
