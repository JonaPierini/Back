const { Router} = require("express");
const productsRouter = Router();
const uploads = require("../utils/index");
const fs = require('fs')

productsRouter.get("/", async (req, res) => {
  let read = await fs.promises.readFile('productos.json', 'utf-8')
  JSON.parse(read)
  let { limit } = req.query;
  if (limit) {
    let respuestLimit = JSON.parse(read).slice(0, Number(limit))
    res.send(respuestLimit)
  } else {
    res.send(JSON.parse(read));
  }
});

productsRouter.get("/:id", async  (req, res) => {
  let read = await fs.promises.readFile('productos.json', 'utf-8')
  let id = req.params.id;
  let prodFind = JSON.parse(read).find((elem) => elem.id === Number(id));
  if (prodFind) {
    res.send(prodFind);
  } else {
    res.send(`No hay productos con el id N° ${id}`);
  }
});

// if (this.products.find((prod) => prod.code === code)) return;
// if(title === '' || description == '' || isNaN(price) || thumbnail == '' || isNaN(code) || isNaN(stock)) return

productsRouter.post("/agregar", uploads.single("archivo"), async (req, res)  => {
  let newProduct = {
    id: new Date().getMilliseconds(),
    title: req.body.title,
    description: req.body.description,
    code: req.body.code,
    price: req.body.price,
    status: req.body.status,
    stock: req.body.stock,
    category: req.body.category,
    thumbnails: req.body.thumbnails,
  };
  if (
    newProduct.title === undefined
    // || newProduct.description === undefined || newProduct.code === undefined || isNaN(newProduct.price) || newProduct.status != Boolean || isNaN(newProduct.stock) || newProduct.category === undefined
  ) {
    res.send("Debe ingresar todos los campos");
  } else {
    // const file = req.file;
    // if (file) {
    //   newProduct.thumbnails = file.path;
    // }
    let read = await fs.promises.readFile('productos.json', 'utf-8')
    if(read){
      let prodParse = JSON.parse(read)
      prodParse.push(newProduct)
      await fs.promises.writeFile('productos.json', JSON.stringify(prodParse))
    }
    res.send("Producto Agregado");
  }
});

productsRouter.put("/:id", async (req, res) => {
  let read = await fs.promises.readFile('productos.json', 'utf-8')
  if(read){
    let jsonParse = JSON.parse(read)
    let id = req.params.id
    let newPro = req.body.title
    jsonParse.find((elem)=> elem.id == id).title = newPro
    await fs.promises.writeFile('productos.json', JSON.stringify(jsonParse))
    res.send({status: 'succes', id})
  } else{
    res.send(`Producto con ${id} no encontrado`)
  }
 
});

productsRouter.delete('/:id', async (req, res) =>{
  let id = req.params.id;
  let read = await fs.promises.readFile('productos.json', 'utf-8')
  let delet = JSON.parse(read).filter((elem) =>  elem.id != id)
  await fs.promises.writeFile('productos.json', JSON.stringify(delet))
  res.send(`Producto con el id ${id} borrado - En su carrito ahora se encuentran los siguientes productos ${JSON.stringify(delet)}`)
})

module.exports = productsRouter;
