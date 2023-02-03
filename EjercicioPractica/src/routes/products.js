const {Router} = require('express')
const productRouter = Router()

let productsAgregados = []
productRouter.post('/agregar', (req, res) =>{
    let newProduct = {
        title: req.body.title,
        price: req.body.price
    }
    productsAgregados.push(newProduct)
    console.log(newProduct)
    res.send('Producto Agregado')
})

productRouter.get('/productos', (req, res) =>{
    res.send(productsAgregados)
})

module.exports = productRouter