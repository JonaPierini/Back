const express = require('express')
const app = express()

// cualquier peticion que hagas en / responde => Ruta raiz
app.get('/', (req, res)=> {
    res.send('Ruta raiz')
})

// cualquier peticion que hagas en /saludo responde => hola a todos
app.get('/saludo', (req, res)=> {
    res.send('Hola a todos')
})

app.get('/bienvenida', (req, res)=> {
    res.send('<h1>Bienvenidos</h1>')
})

app.get('/usuarios', (req, res)=> {
    res.send({nombre: 'Coder', apellido: 'House', edad: 23})
})

const server = app.listen(8080, ()=> console.log('Server listening on port 8080'))

server.on('error', error => console.log(error))