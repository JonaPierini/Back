const express = require("express");
const app = express();
//importo la ruta
const userRouter = require("./routes/users");

//Middlewares
app.use(express.static("public")); // http://localhost:8080/img/bienvenidos.png y http://localhost:8080/index.html
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRouter);
// => http://localhost:8080/api/user
// => http://localhost:8080/api/user/info
// => http://localhost:8080/api/user/agregar - POST

const server = app.listen(8080, () =>
  console.log("Server running on port 8080")
);
server.on("error", (error) => console.log(error));
