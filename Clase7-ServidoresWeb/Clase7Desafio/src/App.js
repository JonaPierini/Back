const express = require('express')
const ProductManager = require('../ProductManager')

const app = express()

const PORT = 8080

app.get('/', (req, res)=> {
    res.send('Pagina principal')

})

app.get('/products', (req, res)=>  {
    let {limit} = req.query;
    const prueba = new ProductManager();
    const productos = prueba.getProducts(limit)
    res.send(productos)
})



 
app.get('/products/:id', (req, res)=> {
     const prueba = new ProductManager();
     let id = req.params.id;
     let prodFind = JSON.parse(prueba.getProducts()).find((elem)=> elem.id === Number(id))
     if(prodFind) {
        res.send(prodFind)
     } else{
        res.send(`No hay productos con el id N° ${id}`)
     }
})




app.listen(PORT, () => console.log('Server Corriendo'))