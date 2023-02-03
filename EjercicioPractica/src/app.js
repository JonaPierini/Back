const express = require('express')
const productRouter = require('./routes/products')
const app = express()
const PORT = 8080


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.send('Ruta Ok')
})

app.use('/api/', productRouter)
app.use('/api/', productRouter)

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
server.on('error', (error) =>console.log(error))