const {Router} = require("express")
const fs = require('fs')
const cartsRouter = Router()


cartsRouter.post('/', async (req, res)=> {
    let newCart = [{
        id: new Date().getMilliseconds(),
        products: JSON.parse(await fs.promises.readFile('productos.json', 'utf8'))
    }]
    newCart.push(await fs.promises.writeFile('carrito.json', JSON.stringify(newCart)))
    console.log(newCart)
    res.send('Ruta carrito ok')
})

cartsRouter.get('/:id', async (req, res) => {
    let read = await fs.promises.readFile('carrito.json', 'utf-8')
    let id = req.params.id
    let cartFind = JSON.parse(read).find((elem) => elem.id == id)
    if(cartFind){
        res.send(cartFind)
    } else{
        res.send(`No hay productos con el id N° ${id}`)
    }
})

cartsRouter.post('/:id', async (req,res)=> {
    res.send('Ruta post id ok')
})


module.exports = cartsRouter