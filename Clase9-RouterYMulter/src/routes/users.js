const { Router } = require("express");
const userRouter = Router();
const uploads = require('../utils/index')

const users = [];

userRouter.get("/", (req, res) => {
  res.send("Ruta raiz user");
});

userRouter.get("/info", (req, res) => {
  res.json(users);
});

userRouter.post("/agregar", uploads.single('archivo'), (req, res) => {
  const file = req.file
  console.log(file)
  if(!file){
    res.send('Error')
  }
  let user = req.body;
  user.image = file.path
  users.push(user);
  res.send("Usuario agregado");
});

module.exports = userRouter;
