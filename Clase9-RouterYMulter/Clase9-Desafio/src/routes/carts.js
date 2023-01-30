const { Router, json } = require("express");
const fs = require("fs");
const cartsRouter = Router();

cartsRouter.post('/:cid/products/:pid', async (req, res)=> {
  let cid = req.params.cid;
  let pid = req.params.pid;
  
  let allProducts = await fs.promises.readFile("productos.json", "utf-8");
  console.log('Todos los productos ' + allProducts)

  let findProduct = JSON.parse(allProducts).find((producto) => producto.id == pid);
  console.log('Producto en particular por parametro ' + JSON.stringify(findProduct))

  let allCarts = await fs.promises.readFile("carrito.json", "utf-8");
  console.log('Todos los carritos ' + JSON.stringify(allCarts))

  let findCart = JSON.parse(allCarts).find((cart) => cart.id == cid)
  console.log('Carrito en particular por parametro ' + JSON.stringify(findCart))

  



  let {id, product} = findCart
  

  const prueba = () => {
    let map = JSON.parse(allCarts).map((elem) => elem.id)
    console.log(map)
    if(map) {
      let spred = [
        ...JSON.parse(allCarts),
         {
           id: id,
           product: findProduct
         },
      ]
      console.log(spred)
    }
  }
 
  prueba()

  // let ind = JSON.parse(allCarts).indexOf(id)
  
  // console.log(ind)
  // console.log(spred)
  //await fs.promises.writeFile("carrito.json", JSON.stringify(spred));
  
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
