const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

const PORT = "8000";

const usuarios = [
  { id: 1, nombre: "Producto 1", genero: "M" },
  { id: 2, nombre: "Producto 2", genero: "F" },
  { id: 3, nombre: "Producto 3", genero: "M" },
  { id: 4, nombre: "Producto 4", genero: "M" },
];

//localhost:8000/?genero=F
app.get("/", (req, res) => {
  let filter = req.query.genero;
  console.log(filter)
  let respuesta;
  if (filter) {
    respuesta = filter;
    console.log(respuesta);
    if (respuesta == "M") {
      let pruebaM = usuarios.filter((elem) => elem.genero == "M");
      res.send(pruebaM);
    }
    if (respuesta == "F") {
      let pruebaF = usuarios.filter((elem) => elem.genero == "F");
      res.send(pruebaF);
    }
  } else {
    respuesta = usuarios;
    res.send(respuesta);
  }
});

// parametros dinamico => :
app.get("/:id", (req, res) => {
  let id = req.params.id;
  let usuarioFind = usuarios.find((u) => u.id === Number(id));
  if (usuarioFind) {
    res.send(usuarioFind);
  } else {
    res.send(`Usuario con el ${id} no encontrado`);
  }
});

//

const server = app.listen(PORT, () =>
  console.log(`listening on http://localhost:${PORT}`)
);
server.on("error", (error) => console.log(error));
