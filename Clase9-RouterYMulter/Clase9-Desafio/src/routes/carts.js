const { Router, json } = require("express");
const fs = require("fs");
const cartsRouter = Router();

cartsRouter.post('/:cid/products/:pid', async (req, res)=> {
  let cid = req.params.cid;
  let pid = req.params.pid;
  let allProducts = await fs.promises.readFile("productos.json", "utf-8");
  let findProduct = JSON.parse(allProducts).find((producto) => producto.id == pid);
  let allCarts = await fs.promises.readFile("carrito.json", "utf-8");
  allCarts = JSON.parse(allCarts)
  let findIndexCart = allCarts.findIndex((elem) => elem.id == cid)
  if(findIndexCart === -1){
    res.send([])
  }
  let findIndex = allCarts[findIndexCart].product.findIndex((elem) => elem.id == pid)
  if(findIndex == -1){
    allCarts[findIndexCart].product.push(findProduct)
  } else{
    allCarts[findIndexCart].product[findIndex] = findProduct 
  }
  await fs.promises.writeFile("carrito.json", JSON.stringify(allCarts));
  res.send(JSON.stringify(`Carrito`))

})

cartsRouter.post("/", async (req, res) => {
  //si lo creo asi => let carts = [] se sobre escribe por eso lo tengo que crear con readfile
  let cartsRead = await fs.promises.readFile('carrito.json', 'utf-8')
  let cartParse = JSON.parse(cartsRead)
  let newCart = {
    id: new Date().getMilliseconds(),
    product: []
  }
  cartParse.push(newCart)
  await fs.promises.writeFile('carrito.json', JSON.stringify(cartParse))
  res.send('Carrito Creado')
});

cartsRouter.get("/:id", async (req, res) => {
  let read = await fs.promises.readFile("carrito.json", "utf-8");
  let id = req.params.id;
  let cartFind = JSON.parse(read).find((elem) => elem.id === Number(id));
  if (cartFind) {
    res.send(cartFind);
  } else {
    res.send(`No hay carrito con el id N° ${id}`);
  }
});


module.exports = cartsRouter;
