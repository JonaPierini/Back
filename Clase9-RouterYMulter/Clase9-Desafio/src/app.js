const express = require("express");
const app = express();
const PORT = 8080;
//importo la ruta
const productsRouter = require("./routes/products");
const cartsRouter = require("./routes/carts")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

//uso ruta productos
// => http://localhost:8080/api/products - GET ALL
app.use("/api/products", productsRouter);
// => http://localhost:8080/api/products - POST
app.use("/api/products/", productsRouter);
// => http://localhost:8080/api/products/:id - GET X ID
app.use("/api/products/", productsRouter);
// => http://localhost:8080/api/products/delete/:id - DELETE
app.use("/api/products/delete/", productsRouter)
// => http://localhost:8080/api/products/:id - PUT
app.use("/api/products/put/", productsRouter)
// => http://localhost:8080/api/products?limit=1 - LIMITE

//use ruta Carrito
// => http://localhost:8080/api/carts - POST
app.use("/api/carts/", cartsRouter)
// => http://localhost:8080/api/carts/:id - GET
// => http://localhost:8080/api/carts/:id/products/:id - POST
// http://localhost:8080/api/carts/6/products/8

//Server
const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
server.on("error", (error) => console.log(error));
