const express = require("express");
const exphbs = require("express-handlebars");
const app = express();


app.engine("handlebars", exphbs.engine());

app.set("views engine", ".handlebars");
app.set("views", "./views");

let usuario = [
  {
    nombre: "Nombre 1",
    apellido: "Apellido 1",
    edad: 30,
  },
  {
    nombre: "Nombre 2",
    apellido: "Apellido 2",
    edad: 40,
  },
  {
    nombre: "Nombre 3",
    apellido: "Apellido 3",
    edad: 50,
  },
];

app.get("/", (req, res) => {
  res.render("index", { usuario });
});

app.get('/user/:id', (req, res)=>{
    let usuario = usuarios[req.params.id]
    res.render('user', usuario)
})

const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log("Server running on PORT 8000")
);
server.on("erro", (error) => console.log(error));
